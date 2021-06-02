<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :src="barImage"
    mobile-break-point="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list<v-list
    dense
    nav
  >
    <v-list-item>
      <v-list-item-avatar
        class="align-self-center"
        color="white"
        contain
      >
        <v-img
          src=""
          max-height="30"
        />
      </v-list-item-avatar>

      <v-list-item-content>
<!--        <v-list-item-title-->
<!--          class="display-1"-->
<!--          v-text="profile.title"-->
<!--        />-->
        <v-img
          src="/INJAZAT-Logo.png"
          max-height="30"
        />
      </v-list-item-content>
    </v-list-item>
  </v-list>

    <v-divider class="mb-2" />

    <v-list
      expand
      nav
    >
      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />

      <template>
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
            <v-list-item link to="/setup/MasterFiles/EducationTypes">
              <v-list-item-content>
                <v-list-item-title>Education Types</v-list-item-title>
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
      </template>

      <!-- Style cascading bug  -->
      <!-- https://github.com/vuetifyjs/vuetify/pull/8574 -->
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'DashboardCoreDrawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
    }),

    computed: {
      ...mapState(['barColor', 'barImage']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      profile () {
        return {
          avatar: true,
          title: this.$t('avatar'),
        }
      },
    },

    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px
</style>
