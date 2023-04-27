import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {FACEBOOK_ICON, INSTAGRAM_ICON, TWITTER_ICON} from "./shared/utils/icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'YoWayuu';
  private lastVH = -1;
  private lastVW = -1;

  constructor(
    private iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral('instagram', sanitizer.bypassSecurityTrustHtml(INSTAGRAM_ICON));
    iconRegistry.addSvgIconLiteral('twitter', sanitizer.bypassSecurityTrustHtml(TWITTER_ICON));
    iconRegistry.addSvgIconLiteral('facebook', sanitizer.bypassSecurityTrustHtml(FACEBOOK_ICON));
  }

  ngOnInit() {
    // this.getWindowSize();
    // this.setActiveTheme();
  }

  /**
   * capture the size of the viewport height
   * calculate the equivalence to 1vh and
   * save the value creating a css variable
   * */
  getWindowSize() {
    const calculateViewport = () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--vw', `${vw}px`);
      return {vh, vw};
    };
    window.addEventListener('resize', calculateViewport);
    let eventFired = false;
    window.addEventListener('orientationchange', () => {
      if(eventFired){ return; }
      eventFired = true;
      let running = true;
      for(const delay of [50, 100, 200, 300, 500, 800, 1000]){
        setTimeout(() => {
          if(running){
            const {vh,vw} = calculateViewport();
            console.log("[orientationchange " + delay + "] vh:", vh, "this.lastVH", this.lastVH, ",vw:", vw, "this.lastVW", this.lastVW);
            if(vh !== this.lastVH || vw !== this.lastVW){
              this.lastVH = vh;
              this.lastVW = vw;
              running = false;
            }
          }
        }, delay);
      }
      eventFired = false;
    });
    const {vh,vw} = calculateViewport();
    this.lastVH = vh;
    this.lastVW = vw;
    console.log("[initialVH] ", this.lastVH);
    console.log("[initialVW] ", this.lastVW);
  }

  private setActiveTheme() {
    const htmlReference = document.getElementById('main-application');
    if(localStorage.getItem('theme')){
      htmlReference!.classList.add(localStorage.getItem('theme')!);
    } else if(!window.matchMedia('(prefers-color-scheme: dark)').matches) {
      htmlReference!.classList.add('light-mode');
    }
  }
}
