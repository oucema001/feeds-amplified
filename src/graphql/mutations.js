/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createTwittefeeds = /* GraphQL */ `
  mutation CreateTwittefeeds(
    $input: CreateTwittefeedsInput!
    $condition: ModelTwittefeedsConditionInput
  ) {
    createTwittefeeds(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateTwittefeeds = /* GraphQL */ `
  mutation UpdateTwittefeeds(
    $input: UpdateTwittefeedsInput!
    $condition: ModelTwittefeedsConditionInput
  ) {
    updateTwittefeeds(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteTwittefeeds = /* GraphQL */ `
  mutation DeleteTwittefeeds(
    $input: DeleteTwittefeedsInput!
    $condition: ModelTwittefeedsConditionInput
  ) {
    deleteTwittefeeds(input: $input, condition: $condition) {
      id
      name
      url
      createdAt
      updatedAt
    }
  }
`;
