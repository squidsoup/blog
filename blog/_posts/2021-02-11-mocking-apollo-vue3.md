---
title: Mocking the apollo client in a vue 3 app using apollo-composable
date: 2020-02-11
tags:
  - JavaScript
  - Vue
  - GraphQL
author: Kit Randel
location: Dunedin, New Zealand
summary: How to mock the apollo client with mock-apollo-client in an app using apollo-composable
---

# Mocking the apollo client in a vue 3 app using apollo-composable

Note: At the time of writing, the documentation for many vue 3 libraries was in a state of flux. Consult the documentation for [@vue/apollo-composable](https://v4.apollo.vuejs.org/api/) first.

If you're using the new composable API with apollo and vue 3, you may have found the advice around testing somewhat lacking. I've found the following approach to mocking the apollo client using Mike Gibson's [mock-apollo-client](https://github.com/Mike-Gibson/mock-apollo-client) works well.

```javascript
import { DefaultApolloClient } from "@vue/apollo-composable";

import myQuery from "@/graphql/myQuery.query.gql";

describe("MyComponent.vue", () => {
  let wrapper;

  // define a mock response matching your schema
  const mockResponse = {
    data: {
      foo: ...
    }
  }

  beforeEach(async () => {
    const mockClient = createMockClient();

    mockClient.setRequestHandler(myQuery, () =>
      Promise.resolve(mockResponse)
    );

    wrapper = mount(MyComponent, {
      global: {
        provide: {
          [DefaultApolloClient]: mockClient
        }
      }
    });
  });

  afterEach(() => {
    wrapper = null;
  });

  it("renders", () => {...});
});
```
