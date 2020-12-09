//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//services AKA providers
import { AuthService } from './common/services/auth.service';
import { AuthGuard } from './common/services/auth-guard.service';
import { AdminAuthGuard } from './common/services/admin-auth-guard.service';
import { GameInfoService } from './common/services/gameinfo.service';
import { GameService } from './common/services/game.service';
import { UserAuthGuard } from './common/services/user-auth-guard.service';
import { UserService } from './common/services/user.service';



//declarations/ bootstraps
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForumComponent } from './forum/forum.component';
import { GamesComponent } from './games/games.component';
import { StreamingComponent } from './streaming/streaming.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { SearchComponent } from './search/search.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameComponent } from './admin/game/game.component';
import { GameFormComponent } from './admin/game-form/game-form.component';
import { ViewGameComponent } from './view-game/view-game.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component';
import { ProfileService } from './common/services/profile.service';
import { ReactiveDefaultFormControlComponent } from './form-controls/reactive-default-form-control/reactive-default-form-control.component';
import { ReactiveSelectFormControlComponent } from './form-controls/reactive-select-form-control/reactive-select-form-control.component';
import { ReactiveTextareaFormControlComponent } from './form-controls/reactive-textarea-form-control/reactive-textarea-form-control.component';
import { CredentialFormControlComponent } from './form-controls/credential-form-control/credential-form-control.component';
import { DisableControlDirective } from './common/directives/disable-control.directive';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


//environment
import { environment } from 'src/environments/environment';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';
import { TdfMultiFormControlComponent } from './form-controls/tdf-multi-form-control/tdf-multi-form-control.component';
import { PostComponent } from './post/post.component';
import { GamingIndexComponent } from './gaming-index/gaming-index.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreatorsComponent } from './creators/creators.component';
import { ConsoleComponent } from './console/console.component';
import { ConsoleMakersComponent } from './console-makers/console-makers.component';
import { ContribDashboardComponent } from './contrib-dashboard/contrib-dashboard.component';
import { EditContributionsComponent } from './edit-contributions/edit-contributions.component';
import { StarsComponent } from './stars/stars.component';
import { ServicesModule } from './common/services/services.module';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { NewsComponent } from './news/news.component';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { RecentlyPostedComponent } from './recently-posted/recently-posted.component';
import { ViewAllRatingsComponent } from './view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ViewThreadsComponent } from './view-threads/view-threads.component';


@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    ViewProfileComponent,
    EditPreferencesComponent,
    DropdownComponent,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent,
    HomeComponent,
    SignInComponent,
    CreateAccountComponent,
    ForumComponent,
    GamesComponent,
    StreamingComponent,
    ReccomendationsComponent,
    WatchlistsComponent,
    SearchComponent,
    ForgotPasswordComponent,
    CreateThreadComponent,
    NotFoundComponent,
    GameComponent,
    GameFormComponent,
    ViewGameComponent,
    ViewRatingsComponent,
    ReactiveDefaultFormControlComponent,
    ReactiveSelectFormControlComponent,
    ReactiveTextareaFormControlComponent,
    CredentialFormControlComponent,
    DisableControlDirective,
    TdfMultiFormControlComponent,
    PostComponent,
    GamingIndexComponent,
    CategoriesComponent,
    CreatorsComponent,
    ConsoleMakersComponent,
    ConsoleComponent,
    ContribDashboardComponent,
    EditContributionsComponent,
    StarsComponent,
    EditReviewComponent,
    NewsComponent,
    ContentDashboardComponent,
    ViewReviewsComponent,
    ViewPostsComponent,
    RecentlyPostedComponent,
    ViewAllRatingsComponent,
    ViewAllReviewsComponent,
    ViewAllPostsComponent,
    ViewThreadsComponent,
    ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    ServicesModule.forRoot(),
    RouterModule.forRoot([
        //routes asscesible to annoymous users

        //temporarily swapped this for learning css. conveninece.
        { path: '', component: HomeComponent },

        //note all the inconsistencies in your routing- camel case here, pascal case there. NOOO!
        
        { path: 'sign_in/createAccount/forgotPassword', component: ForgotPasswordComponent },
        { path: 'sign_in/createAccount', component: CreateAccountComponent},
        { path: 'sign_in', component: SignInComponent },
        { path: 'search', component: SearchComponent },
        // On deployment, change uid here to displayname to be user and search friendlier
        { path: 'sign_in/create_profile/:uid', component: EditProfileComponent, canActivate: [AuthGuard]},
        { path: 'profile/:uid/:username', component: ViewProfileComponent, canActivate: [AuthGuard] },
        //should delete this at somepoint- for now its a fail safe mechanism.
        { path: 'profile/:uid', component: ViewProfileComponent, canActivate: [AuthGuard] },
        
        { path: 'preferences/:uid/:username', component: EditPreferencesComponent, canActivate: [AuthGuard]},
        { path: 'preferences/:uid', component: EditPreferencesComponent, canActivate: [AuthGuard]},
        { path: 'contributions/:uid/:username', component: EditContributionsComponent, canActivate: [AuthGuard]},




        //you'll see more on these pages if youre signed in, but can view as anonymous user.
        { path: 'forum', component: ForumComponent },
        { path: 'forum/view-threads/:thread-name', component: ViewThreadsComponent },
        { path: 'forum/view-threads', component: ViewThreadsComponent },
        { path: 'forum/create-thread', component: CreateThreadComponent },
        //should we break it down even more? create post, view post? probably not, at least in router.
        
        //should use a query param, pull up view-all-posts but with search term as current user.
        { path: 'forum/my-posts/:id', component: ViewAllPostsComponent },



        { path: 'games', component: GamesComponent },        
        { path: 'games/:id', component: ViewGameComponent },

        { path: 'gaming-index', component: GamingIndexComponent },
        { path: 'gaming-index/creators/:creator', component: CreatorsComponent },
        { path: 'gaming-index/creators', component: CreatorsComponent },
        { path: 'gaming-index/categories/:category', component: CategoriesComponent },
        { path: 'gaming-index/categories', component: CategoriesComponent },
        { path: 'gaming-index/console-makers/:name/:qualified_name', component: ConsoleComponent },
        { path: 'gaming-index/console-makers/:name', component: ConsoleMakersComponent },
        { path: 'gaming-index/console-makers', component: ConsoleMakersComponent },

        //routes for logged in users
        // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
        { path: 'forum/create-thread', component: CreateThreadComponent, canActivate: [AuthGuard] },
        { path: 'contrib-dashboard/:id/:username', component: ContribDashboardComponent,  canActivate: [AuthGuard]  },
        { path: 'contrib-dashboard/ratings/:id/:username', component: ViewRatingsComponent,  canActivate: [AuthGuard]  },
        { path: 'contrib-dashboard/reviews/:id/:username', component: ViewReviewsComponent, canActivate: [AuthGuard] },
        
        // where id refers to review-id
        { path: 'contrib-dashboard/reviews/:id', component: EditReviewComponent, canActivate: [AuthGuard] },

        

        
        { path: 'content-dashboard', component: ContentDashboardComponent },
        { path: 'content-dashboard/watchlists', component: WatchlistsComponent },
        { path: 'content-dashboard/streams', component: StreamingComponent },
        { path: 'content-dashboard/news', component: NewsComponent },
        { path: 'content-dashboard/recently-posted', component: RecentlyPostedComponent },
        { path: 'content-dashboard/recently-posted/ratings', component: ViewAllRatingsComponent },
        { path: 'content-dashboard/recently-posted/reviews', component: ViewAllReviewsComponent },
        { path: 'content-dashboard/recently-posted/posts', component: ViewAllPostsComponent },


        
       
        // admin-only routes: probably dont need admin/home TBT
        { path: 'admin/game/new', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
        { path: 'admin/game/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
        { path: 'admin/game', component: GameComponent,  canActivate: [AuthGuard, AdminAuthGuard]},


        //wildcard for fallthrough cases.
        { path: '**', component: NotFoundComponent }
    ])
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
