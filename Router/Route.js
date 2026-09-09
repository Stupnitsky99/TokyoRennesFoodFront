export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*

[] -> Tout le monde peut y accéder
["Disconnected"] -> Réserver aux utilisateurs déconnecté
["Client"] -> Réserver aux utilisateurs avec le rôle client
["Admin"] -> Réserver aux utilisateurs avec le rôle admin
["Admin", "client"] -> Réserver aux utilisateurs avec le rôle client ou admin
*/