import UrlParser from '../routes/url-parsel';
import routes from '../routes/routes';
 
class App
{
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
 
export default App;