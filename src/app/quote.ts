
export class Quote {
  public showDetails: boolean;
  public showButton: boolean;
  public votes: number;
  constructor(
    public description: string,
    public author: string,
    public postedBy: string,
    public timePosted: Date,
    public upVote: number,
    public downVote: number) {

    this.showDetails = false;
    this.showButton = true;
    this.votes = 0;
  }
}