
export class Quote {
  public showDetails: boolean;
  public showButton: boolean;
  constructor(
    public author: string,
    public description: string,
    public postedBy: string,
    public timePosted: Date,
    public upVote: number,
    public downVote: number) {
    this.showDetails = false;
    this.showButton = true;
  }
}