
export default (data) => {
  Vue.$http
    .post('/auth/login', {
      data
    });
}
