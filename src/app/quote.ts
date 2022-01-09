
export class Quote {
  public showDescription: boolean;
  public showButton: boolean;
  constructor(public id: number, public author: string, public description: string, public postedBy: string, public timePosted: Date, public upVote: number, public downVote: number) {

    this.showDescription = false;
    this.showButton = true;
  }
}