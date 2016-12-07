import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorConfigComponent } from './sensor-config/sensor-config.component';
import { InboxComponent } from './inbox/inbox.component';
import { ClosedsourceComponent } from './closedsource/closedsource.component';
import { SpamComponent } from './spam/spam.component';
import { ForumsComponent } from './forums/forums.component';
import { UpdatesComponent } from './updates/updates.component';
import { PromosComponent } from './promos/promos.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SocialComponent } from './social/social.component';
import { HelpComponent } from './help/help.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'inbox', component: InboxComponent},
    { path: 'configure', component: SensorConfigComponent},
     { path: 'closedsource', component: ClosedsourceComponent },
    { path: 'spam', component: SpamComponent},
    { path: 'forums', component: ForumsComponent},
     { path: 'updates', component: UpdatesComponent },
    { path: 'promos', component: PromosComponent},
    { path: 'purchases', component: PurchasesComponent},
     { path: 'social', component: SocialComponent },
    { path: 'help', component: HelpComponent}
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}