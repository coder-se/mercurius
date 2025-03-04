'use strict'

const GRAPHQL_WS = 'graphql-ws'
module.exports.GRAPHQL_WS = GRAPHQL_WS

module.exports.getProtocolByName = function (name) {
  switch (true) {
    case (name.indexOf('graphql-transport-ws') !== -1):
      return {
        GQL_CONNECTION_INIT: 'connection_init', // Client -> Server
        GQL_CONNECTION_ACK: 'connection_ack', // Server -> Client
        GQL_CONNECTION_ERROR: 'connection_error', // Server -> Client
        GQL_CONNECTION_KEEP_ALIVE: 'ka', // Server -> Client
        GQL_CONNECTION_TERMINATE: 'connection_terminate', // Client -> Server
        GQL_START: 'subscribe', // Client -> Server
        GQL_DATA: 'next', // Server -> Client
        GQL_ERROR: 'error', // Server -> Client
        GQL_COMPLETE: 'complete', // Server -> Client
        GQL_STOP: 'stop' // Client -> Server
      }
    case (name.indexOf(GRAPHQL_WS) !== -1):
      return {
        GQL_CONNECTION_INIT: 'connection_init', // Client -> Server
        GQL_CONNECTION_ACK: 'connection_ack', // Server -> Client
        GQL_CONNECTION_ERROR: 'connection_error', // Server -> Client
        GQL_CONNECTION_KEEP_ALIVE: 'ka', // Server -> Client
        GQL_CONNECTION_TERMINATE: 'connection_terminate', // Client -> Server
        GQL_START: 'start', // Client -> Server
        GQL_DATA: 'data', // Server -> Client
        GQL_ERROR: 'error', // Server -> Client
        GQL_COMPLETE: 'complete', // Server -> Client
        GQL_STOP: 'stop' // Client -> Server
      }
    default:
      return null
  }
}
