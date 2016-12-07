import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorConfigComponent } from './sensor-config/sensor-config.component';

import { AppRoutingModule } from './app.routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ClosedsourceComponent } from './closedsource/closedsource.component';
import { SpamComponent } from './spam/spam.component';
import { ForumsComponent } from './forums/forums.component';
import { UpdatesComponent } from './updates/updates.component';
import { PromosComponent } from './promos/promos.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SocialComponent } from './social/social.component';
import { HelpComponent } from './help/help.component';

import { SensorsService } from './sensors.service';
import { SensorListComponent } from './sensorlist/sensorlist.component';
import { FilterSensorPipe } from './filtersensor.pipe';
import { SensorFilterComponent } from './sensorfilter/sensorfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ProfileComponent,
    MenuComponent,
    DashboardComponent,
    SensorConfigComponent,
    InboxComponent,
    ClosedsourceComponent,
    SpamComponent,
    ForumsComponent,
    UpdatesComponent,
    PromosComponent,
    PurchasesComponent,
    SocialComponent,
    HelpComponent,
    SensorListComponent,
    FilterSensorPipe,
    SensorFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SensorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
