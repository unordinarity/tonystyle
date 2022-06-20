exports = {
  createPages: async ({ actions }) => {
    actions.createPage({
      path: "/using-dsg",
      component: require.resolve("./src/templates/using-dsg.js"),
      context: {},
    })
  }
}
