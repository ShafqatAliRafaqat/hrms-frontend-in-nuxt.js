<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-group
          prepend-icon="mdi-apps"
          :value="false">
          <template v-slot:activator>
            <v-list-item-title>Setup</v-list-item-title>
          </template>
            <v-list-group
              no-action
              sub-group >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Company Setup</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item link to="/setup/CompanySetup/CompanyInfo">
<!--                <v-list-item-action>-->
<!--                  <v-icon>mdi-school</v-icon>-->
<!--                </v-list-item-action>-->
                <v-list-item-content>
                  <v-list-item-title> Company Info</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/CompanySetup/Branch" >
                <v-list-item-content >
                  <v-list-item-title>Branch</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/CompanySetup/Departments">
                <v-list-item-content >
                  <v-list-item-title>Departments</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/CompanySetup/Banks">
                <v-list-item-content >
                  <v-list-item-title>Banks</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/CompanySetup/LegalDocuments" >
                <v-list-item-content >
                  <v-list-item-title>Legal Documents</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/CompanySetup/Notes">
                <v-list-item-content >
                  <v-list-item-title>Notes</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-group
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Master Files</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item link to="/setup/MasterFiles/CountryNationality">
                <v-list-item-content>
                  <v-list-item-title> Country/Nationality</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/City">
                <v-list-item-content>
                  <v-list-item-title> City</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Religion">
                <v-list-item-content>
                  <v-list-item-title> Religion</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/EvaluationCompetencies">
                <v-list-item-content>
                  <v-list-item-title> Evaluation Competencies</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/EvaluationTypes">
                <v-list-item-content>
                  <v-list-item-title> Evaluation Types</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/DocumentTypes">
                <v-list-item-content>
                  <v-list-item-title>Document Types</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/BeneficiaryTypes">
                <v-list-item-content>
                  <v-list-item-title>Beneficiary Types</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/LeaveTypes">
                <v-list-item-content>
                  <v-list-item-title> Leave/Vacation Types</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Positions">
                <v-list-item-content>
                  <v-list-item-title>Positions/Designations</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Sponsors">
                <v-list-item-content>
                  <v-list-item-title>Sponsors</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Earnings">
                <v-list-item-content>
                  <v-list-item-title> Earnings/Benefits</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Deductions">
                <v-list-item-content>
                  <v-list-item-title>Deductions</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Modification">
                <v-list-item-content>
                  <v-list-item-title>Modification Types</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/CurrencyTypes">
                <v-list-item-content>
                  <v-list-item-title> Currency Types</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Sections">
                <v-list-item-content>
                  <v-list-item-title> Sections</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/CostCenters">
                <v-list-item-content>
                  <v-list-item-title> Cost Centers</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/BeginningBalance">
                <v-list-item-content>
                  <v-list-item-title> Beginning Balance</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Percentage">
                <v-list-item-content>
                  <v-list-item-title>Percentage</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/EvaluationTypes">
                <v-list-item-content>
                  <v-list-item-title>Evaluation Types</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/Sessions">
                <v-list-item-content>
                  <v-list-item-title>Sessions</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/CompanySchedules">
                <v-list-item-content>
                  <v-list-item-title> Company Schedules</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link to="/setup/MasterFiles/GosiSubscription">
                <v-list-item-content>
                  <v-list-item-title>Gosi Subscription</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          <v-list-item link to="/setup/ApplicationPreferences">
            <v-list-item-action>
              <v-icon>mdi-cards-club</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{$t('application_preferences')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/setup/associate-benefits">
            <v-list-item-action>
              <v-icon>mdi-camera-iris</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{$t('assoc_benefits')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/setup/associate-evaluation">
            <v-list-item-action>
              <v-icon>mdi-brightness-7</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{$t('assoc_position')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/setup/Letter">
            <v-list-item-action>
              <v-icon>mdi-camera-control </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{$t('setup_letter')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/setup/sms-letter">
            <v-list-item-action>
              <v-icon>mdi-book-open-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> {{$t('sms_letter')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-group>
        <v-list-item link to="/maintenance">
          <v-list-item-action>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{$t('maintenance')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/payroll">
          <v-list-item-action>
            <v-icon>mdi-bank-check</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{$t('payroll')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/issuance">
          <v-list-item-action>
            <v-icon>mdi-broadcast</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{$t('issuance')}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <!--        <v-list-item-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          :to="item.to"-->
<!--          router-->
<!--          exact-->
<!--        >-->
<!--          <v-list-item-action>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title v-text="item.title" />-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#005BA6"
    >
      <v-app-bar-nav-icon style="color: white" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="app-bar-title" v-text="title" />
      <v-spacer />
      <!--Profile Image-->
      <v-menu offset-y v-if="$store.state.user.isAuthenticated">
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on">
            <v-avatar size="35px" item>
              <v-img v-if="userDetail && userDetail.profile_image_thumb_full_path"  :src="userDetail.profile_image_thumb_full_path"></v-img>
              <v-img v-else src="/avatar.jpg"></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item    to="/auth/Profile">
            <v-list-item-title >
              <v-icon>mdi-settings</v-icon>  {{$t('my_profile')}}
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="reset">
            <v-list-item-title>
              <v-icon>mdi-logout-variant</v-icon> {{$t('logout')}}
            </v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar.vue",
  data(){
    return {
      clipped: false,
      drawer: true,
      userDetail:{},

      items: [
        {
          icon: 'mdi-apps',
          title: this.$t('setup'),
          to: '/setup'
        },
        {
          icon: 'mdi-cog-outline',
          title: this.$t('maintenance'),
          to: '/maintenance'
        },
        {
          icon: 'mdi-bank-check ',
          title: this.$t('payroll'),
          to: '/payroll'
        },
        {
          icon: 'mdi-broadcast',
          title: this.$t('issuance'),
          to: '/issuance'
        },
      ],
      miniVariant: false,
      title: 'HR SYSTEM'
    }

  },
  created() {
    this.userDetail=this.$store.state.user.user
    },
  methods:{
    reset () {
      this.$store.dispatch('reset').then(response => {
        this.$router.push('/auth/Login')
      })
    },
  }

}
</script>

<style  lang="scss" scoped>
@import "~/assets/sass/main.scss";
.remove-shadow::v-deep.v-toolbar:not(.v-sheet--outlined){
  box-shadow: 0px -2px 13px 5px rgb(0 0 0 / 9%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
}
.show_drawer{
  @media (min-width: 769px)   {
  display: none;
  }
}
.app-icon::v-deep .v-icon{
  color: $purple;
}
.sign-in-btn::v-deep.v-btn{
  height: 42px;
  min-width: 65px;
  width:auto;
  padding: 12px 24px;
}

.accounts{
  @media (min-width: 770px) and (max-width: 1100px){
    display: none;
  }
}


.app-bar-title{
  //color: $secondary;
  color: $white;
  font-weight: $font-weight-bold;
}
</style>




