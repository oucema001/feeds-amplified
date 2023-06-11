/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTwittefeeds = /* GraphQL */ `
  query GetTwittefeeds($id: ID!) {
    getTwittefeeds(id: $id) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const listTwittefeeds = /* GraphQL */ `
  query ListTwittefeeds(
    $filter: ModelTwittefeedsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTwittefeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
