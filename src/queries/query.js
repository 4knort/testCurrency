const pair = '';

export const query = `
  https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance
  .xchange%20where%20pair%20in%20(${pair})&format=json&diagnostics=true
  &env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=
`;
