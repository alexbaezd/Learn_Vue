export const state = () => ({
  comments: [
    {
      text: "Looks great Julianne!",
      author: "Robin Rendle",
      authorImg:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg",
      date: "2020-05-04T04:00:00Z"
    },
    {
      text: "I love the Sea",
      author: "Miriam Suzanne",
      authorImg:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-miriam.jpg",
      date: "2020-05-09T04:00:00Z"
    },
    {
      text: "Where are you?",
      author: "Geoff Graham",
      authorImg:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg",
      date: "2020-05-14T04:00:00Z"
    },

    {
      text: "😃 Wow",
      author: "Magoo",
      authorImg:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-geoff.jpg",
      date: "2020-06-02T04:00:00Z"
    }
  ]
});

export const mutations = {
  addComment(state, newComment) {
    state.comments.push({
      text: newComment,
      author: "Alex",
      authorImg:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/v-coffee.jpg",
      date: new Date().toISOString()
    });
  }
};

export const getters = {
  lastComment: state => {
    let recentDate = new Date(
      Math.max.apply(
        null,
        state.comments.map(function(e) {
          return new Date(e.date);
        })
      )
    );

    let last = state.comments.find(com => {
      return new Date(com.date).toISOString() === recentDate.toISOString();
    });

    return `"${last.text}" by ${last.author}`;
  }
};
