import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Column } from 'react-virtualized'
import {
  fetchAllEvents,
  eventListSelector,
  loadedSelector,
  loadingSelector,
  toggleSelectEvent
} from '../../ducks/events'
import Loader from '../common/loader'
import 'react-virtualized/styles.css'
import TableRow from './table-row'

export class EventsTableVirtualized extends Component {
  static propTypes = {}

  componentDidMount() {
    this.props.fetchAllEvents()
  }

  render() {
    if (this.props.loading) return <Loader />
    return (
      <Table
        rowCount={this.props.events.length}
        width={500}
        height={300}
        rowHeight={50}
        headerHeight={50}
        rowGetter={this.rowGetter}
        rowRenderer={this.getRowRenderer}
        onRowClick={this.handleSelect}
      >
        <Column dataKey="title" width={200} label="Title" />
        <Column dataKey="where" width={200} label="Place" />
        <Column dataKey="when" width={200} label="When" />
      </Table>
    )
  }

  handleSelect = ({ rowData }) => this.props.selectEvent(rowData.id)

  getRowRenderer = (rowCtx) => <TableRow {...rowCtx} />

  rowGetter = ({ index }) => this.props.events[index]
}

export default connect(
  (state) => ({
    events: eventListSelector(state),
    loading: loadingSelector(state),
    loaded: loadedSelector(state)
  }),
  { fetchAllEvents, selectEvent: toggleSelectEvent }
)(EventsTableVirtualized)
