export class Profile {
  constructor(
    public id: number = 0,
    public picUrl = '',
    public name = '',
    public occupation = '',
    public city = '',
    public state = '',
    public bio = '',
    public socialProfiles = [
      'facebook',
      'twitter',
      'instagram',
      'linkedin',
      'google',
    ]
  ) {}
}
