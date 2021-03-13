import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { repos } from './repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  userName: string = "tektutorialshub";
  repos: repos[] = [];

  loading: boolean = false;
  errorMessage!: string;

  constructor(private githubser: GithubService) {}

  getRepos() {
    this.loading = true;
    this.errorMessage = "";

    this.githubser.getRepo(this.userName).subscribe(response => {
      console.log("Received Response from Observable");
      this.repos = response;
    }),
      (      error: string) => {
        console.log("Received ERROR from Observable");
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        console.log("Observable Completed Process");
        this.loading = false;
      };
  }
}
