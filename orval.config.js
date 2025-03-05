module.exports = {
  store: {
    mode: "tags-split",
    input: "http://localhost:3005/api-json",
    output: {
      target: "codegen/apis.ts",
      schemas: "codegen/model",
      client: "react-query",
      override: {
        mutator: {
          path: "./libs/customAxios.ts",
          name: "customInstance",
        },
        query: {
          useQuery: true,
          useInfinite: false,
          useSuspenseQuery: true,
          useSuspenseInfiniteQuery: true,
          useMutation: true,
        },
      },
    },
  },
};
