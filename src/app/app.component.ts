import { Component } from '@angular/core';
import { Router, PRIMARY_OUTLET, UrlTree, UrlSegmentGroup } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spike-outlets';

  constructor(router: Router) {
    const relativeRouteTree = router.parseUrl('team/123/(user/victor//support:help)?jquery=isBad#vuejs');
    const absoluterouteTree = router.parseUrl('/team/123/(user/victor//support:help)?jquery=isBad#reactjs');
    console.log(relativeRouteTree.root, absoluterouteTree.root);
  }

  /**
   * USAGE:
   * urlTree = router.parseUrl(url);
   * getPrimarySegments(urlTree.root)
   **/
  getPrimarySegments(tree: UrlSegmentGroup) {
    const currentSegments = tree.segments.map(s => s.path);
    let childrenSegments = [];
    if (tree.children[PRIMARY_OUTLET]) {
      childrenSegments = this.getPrimarySegments(tree.children.primary);
    }
   return currentSegments.concat(childrenSegments);
 }
}
