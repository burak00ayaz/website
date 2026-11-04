import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({ selector: 'app-root', imports: [], templateUrl: './app.html', styleUrl: './app.css' })
export class App {
  menuOpen = signal(false);
  activeVideo = signal<string | null>(null);
  videoUrl: SafeResourceUrl | null = null;
  constructor(private sanitizer: DomSanitizer) {}
  playVideo(id: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1',
    );
    this.activeVideo.set(id);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
}
