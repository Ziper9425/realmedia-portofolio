/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getImages = /* GraphQL */ `
  query GetImages($id: ID!) {
    getImages(id: $id) {
      id
      imageName
      imageURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageName
        imageURL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
