const baseUrl = 'https://api.trello.com/1/';
const user = {
    token: 'e63bdd3465e4acb76899a1b8a9e58798b97caa4bc9e1fc0398c056f6dfde1ddd',
    key: 'c831d7d4c16463e3fdaf0ae9aafd32ed'
}
export const requester = {
   
  /**
   * Performs a request using cy.request
   * @param {string} meth 
   * @param {string} endpoint 
   * @param {object} query 
   * @param {object} paramBody 
   */  
  sendRequest(meth, endpoint, query = {}, paramBody = {}) {
    cy.request({
      method: meth,
      url: this.getEndPoint(endpoint),
      qs: this.getQuery(query),
      body: paramBody
    })
  },

  /**
   * Sets new user values to perform requests
   * @param {object} newUser includes user token and key
   */
  setUser(newUser) {
    user.key = newUser.key || user.key;
    user.token = newUser.token || user.token;
  },

  /**
   * Builds complete endpoint
   * @param {string} endpoint to make request obtained from trello documentation
   */
  getEndPoint(endpoint) {
    return baseUrl + endpoint;
  },

  /**
   * Builds query with user token and key
   * @param {object} query includes parameters stablished in trello documentation
   */
  getQuery(query) {
    query.key = user.key;
    query.token = user.token;
    return query;
  }
};