/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTwittefeeds = /* GraphQL */ `
  subscription OnCreateTwittefeeds(
    $filter: ModelSubscriptionTwittefeedsFilterInput
  ) {
    onCreateTwittefeeds(filter: $filter) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTwittefeeds = /* GraphQL */ `
  subscription OnUpdateTwittefeeds(
    $filter: ModelSubscriptionTwittefeedsFilterInput
  ) {
    onUpdateTwittefeeds(filter: $filter) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTwittefeeds = /* GraphQL */ `
  subscription OnDeleteTwittefeeds(
    $filter: ModelSubscriptionTwittefeedsFilterInput
  ) {
    onDeleteTwittefeeds(filter: $filter) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
