import { IItem } from "src/interfaces/item";


export class ItemModel {
  constructor({
    avatar_url,
    events_url,
    followers_url,
    following_url,
    gists_url,
    gravatar_id,
    html_url,
    id,
    login,
    node_id,
    organizations_url,
    received_events_url,
    repos_url,
    score,
    site_admin,
    starred_url,
    subscriptions_url,
    type,
    url,
  }: IItem) {
    (this.avatar_url = avatar_url),
      (this.events_url = events_url),
      (this.followers_url = followers_url),
      (this.following_url = following_url),
      (this.gists_url = gists_url),
      (this.gravatar_id = gravatar_id),
      (this.html_url = html_url),
      (this.id = id),
      (this.login = login),
      (this.node_id = node_id),
      (this.organizations_url = organizations_url),
      (this.received_events_url = received_events_url),
      (this.repos_url = repos_url),
      (this.score = score),
      (this.site_admin = site_admin),
      (this.starred_url = starred_url),
      (this.subscriptions_url = subscriptions_url),
      (this.type = type),
      (this.url = url);
  }

  public login?: string;
  public id?: number;
  public node_id?: string;
  public avatar_url?: string;
  public gravatar_id?: string;
  public url?: string;
  public html_url?: string;
  public followers_url?: string;
  public following_url?: string;
  public gists_url?: string;
  public starred_url?: string;
  public subscriptions_url?: string;
  public organizations_url?: string;
  public repos_url?: string;
  public events_url?: string;
  public received_events_url?: string;
  public type?: string;
  public site_admin?: boolean;
  public score?: number;

  public copyWith({
    avatar_url,
    events_url,
    followers_url,
    following_url,
    gists_url,
    gravatar_id,
    html_url,
    id,
    login,
    node_id,
    organizations_url,
    received_events_url,
    repos_url,
    score,
    site_admin,
    starred_url,
    subscriptions_url,
    type,
    url,
  }: IItem): ItemModel {
    return new ItemModel({
      avatar_url: avatar_url ?? this.avatar_url,
      events_url: events_url ?? this.events_url,
      followers_url: followers_url ?? this.followers_url,
      following_url: following_url ?? this.following_url,
      gists_url: gists_url ?? this.gists_url,
      gravatar_id: gravatar_id ?? this.gravatar_id,
      html_url: html_url ?? this.html_url,
      id: id ?? this.id,
      login: login ?? this.login,
      node_id: node_id ?? this.node_id,
      organizations_url: organizations_url ?? this.organizations_url,
      received_events_url: received_events_url ?? this.received_events_url,
      repos_url: repos_url ?? this.repos_url,
      score: score ?? this.score,
      site_admin: site_admin ?? this.site_admin,
      starred_url: starred_url ?? this.starred_url,
      subscriptions_url: subscriptions_url ?? this.subscriptions_url,
      type: type ?? this.type,
      url: url ?? this.url,
    });
  }

  public fromRawJson(str: string): ItemModel {
    return ItemModel.fromJson(JSON.parse(str));
  }

  public toRawJson(): string {
    return JSON.stringify(this.toJson());
  }

  public static fromJson(json: any): ItemModel {
    return new ItemModel({
      avatar_url: json['avatar_url'] != null ? json['avatar_url'] : '',
      events_url: json['events_url'] != null ? json['events_url'] : '',
      followers_url: json['followers_url'] != null ? json['followers_url'] : null,
      following_url: json['following_url'] != null ? json['following_url'] : null,
      gists_url: json['gists_url'] != null ? json['gists_url'] : null,
      gravatar_id: json['gravatar_id'] != null ? json['gravatar_id'] : null,
      html_url: json['html_url'] != null ? json['html_url'] : null,
      id: json['id'] != null ? json['id'] : null,
      login: json['login'] != null ? json['login'] : null,
      node_id: json['node_id'] != null ? json['node_id'] : null,
      organizations_url: json['organizations_url'] != null ? json['organizations_url'] : null,
      received_events_url: json['received_events_url'] != null ? json['received_events_url'] : null,
      repos_url: json['repos_url'] != null ? json['repos_url'] : null,
      score: json['score'] != null ? json['score'] : null,
      site_admin: json['site_admin'] != null ? json['site_admin'] : null,
      starred_url: json['starred_url'] != null ? json['starred_url'] : null,
      subscriptions_url: json['subscriptions_url'] != null ? json['subscriptions_url'] : null,
      type: json['type'] != null ? json['type'] : null,
      url: json['url'] != null ? json['url'] : null,
    });
  }

  public toJson(): any {
    return {
      avatar_url: this.avatar_url,
      events_url: this.events_url,
      followers_url: this.followers_url,
      following_url: this.following_url,
      gists_url: this.gists_url,
      gravatar_id: this.gravatar_id,
      html_url: this.html_url,
      id: this.id,
      login: this.login,
      node_id: this.node_id,
      organizations_url: this.organizations_url,
      received_events_url: this.received_events_url,
      repos_url: this.repos_url,
      score: this.score,
      site_admin: this.site_admin,
      starred_url: this.starred_url,
      subscriptions_url: this.subscriptions_url,
      type: this.type,
      url: this.url,
    };
  }
}
