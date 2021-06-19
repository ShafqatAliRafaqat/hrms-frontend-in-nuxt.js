<template>
  <div class="mb-5">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="bg-color"
    >
      <div class="text-center mt-6">
        <img  src="/Injazat.png" alt="" class="logo-height">
      </div>
      <v-list>
        <v-list-group
          class="text-white"
          :value="false">
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-apps</v-icon>
            </v-list-item-action>
            <v-list-item-title>Setup</v-list-item-title>
          </template>
          <v-list-group
            no-action
            sub-group >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-atom</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="text-center ml-4">Company Setup</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/setup/company-setup/company-info">
              <v-list-item-content>
                <v-list-item-title> Company Info</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/company-setup/branch" >
              <v-list-item-content >
                <v-list-item-title>Branch</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/company-setup/departments">
              <v-list-item-content >
                <v-list-item-title>Departments</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/company-setup/banks">
              <v-list-item-content >
                <v-list-item-title>Banks</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/company-setup/department-section" >
              <v-list-item-content >
                <v-list-item-title>Department Section</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/company-setup/notes">
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

              <v-list-item-action>
                <v-icon>mdi-cog-transfer-outline</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="text-center">Master Files</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/setup/master-files/country-nationality">
              <v-list-item-content>
                <v-list-item-title> Country/Nationality</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/city">
              <v-list-item-content>
                <v-list-item-title> City</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/religion">
              <v-list-item-content>
                <v-list-item-title> Religion</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/evaluation-competencies">
              <v-list-item-content>
                <v-list-item-title> Evaluation Competencies</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/evaluation-types">
              <v-list-item-content>
                <v-list-item-title> Evaluation Types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/document-types">
              <v-list-item-content>
                <v-list-item-title>Document Types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/beneficiary-types">
              <v-list-item-content>
                <v-list-item-title>Beneficiary Types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/leave-types">
              <v-list-item-content>
                <v-list-item-title> Leave/Vacation Types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/positions">
              <v-list-item-content>
                <v-list-item-title>Positions/Designations</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/sponsors">
              <v-list-item-content>
                <v-list-item-title>Sponsors</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/earnings">
              <v-list-item-content>
                <v-list-item-title> Earnings/Benefits</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/deductions">
              <v-list-item-content>
                <v-list-item-title>Deductions</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/modification">
              <v-list-item-content>
                <v-list-item-title>Modification Types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/currency-types">
              <v-list-item-content>
                <v-list-item-title> Currency Types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/sections">
              <v-list-item-content>
                <v-list-item-title> Sections</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/cost-centers">
              <v-list-item-content>
                <v-list-item-title> Cost Centers</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/beginning-balance">
              <v-list-item-content>
                <v-list-item-title> Beginning Balance</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/percentage">
              <v-list-item-content>
                <v-list-item-title>Percentage</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/education-types">
              <v-list-item-content>
                <v-list-item-title>Education Types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/sessions">
              <v-list-item-content>
                <v-list-item-title>Sessions</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/company-schedules">
              <v-list-item-content>
                <v-list-item-title> Company Schedules</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/master-files/gosi-subscription">
              <v-list-item-content>
                <v-list-item-title>Gosi Subscription</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>


          <v-list-group
            no-action
            sub-group >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-atom</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="ml-4">Preferences</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/setup/application-preferences/gosi-preferences">
              <!--                <v-list-item-action>-->
              <!--                  <v-icon>mdi-school</v-icon>-->
              <!--                </v-list-item-action>-->
              <v-list-item-content>
                <v-list-item-title> Gosi Preferences</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/application-preferences/payroll-preferences" >
              <v-list-item-content >
                <v-list-item-title>Payroll Preferences</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/application-preferences/effectivity-preferences" >
              <v-list-item-content >
                <v-list-item-title>Effectivity Preferences</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/application-preferences/payroll-specific-preferences" >
              <v-list-item-content >
                <v-list-item-title>Payroll Specific Preferences</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/application-preferences/leave-specific-preferences" >
              <v-list-item-content >
                <v-list-item-title>Leave Specific Preferences</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link to="/setup/application-preferences/termination-specific-preferences" >
              <v-list-item-content>
                <v-list-item-title>Termination Specific Preferences</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group
            no-action
            sub-group >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-camera-iris</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="text-center ml-4">Associate Benefits</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/setup/associate-benefits">
              <v-list-item-action>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> {{$t('assoc_benefits')}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group
            no-action
            sub-group >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-brightness-7</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="text-center ml-4">Associate Evaluation</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/setup/associate-evaluation">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> {{$t('assoc_position')}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group
            no-action
            sub-group >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-camera-control</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="ml-4">Letter</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/setup/letter">
              <v-list-item-action>
                <v-icon> </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> {{$t('setup_letter')}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-group
            no-action
            sub-group >
            <template v-slot:activator>
              <v-list-item-action>
                <v-icon>mdi-book-open-outline</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="ml-4">Sms</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/setup/sms-letter">
              <v-list-item-action>
                <v-icon></v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> {{$t('sms_letter')}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

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
      color="#363636"
      height="75"
    >

      <v-app-bar-nav-icon style="color: white" @click.stop="drawer = !drawer" />
      <v-btn
        color="white"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
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
.bg-color{
  background-color: #363636;
}
.v-application .primary--text {
  color: #D9D9D9 !important;
  caret-color: #D9D9D9 !important;
}
.text-white{
  color: $white;
}
.v-icon.v-icon{
  color: white;
}
.v-list-item .v-list-item__title, .v-list-item .v-list-item__subtitle{
  color: $white;
}
</style>




