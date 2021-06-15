<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :dark="barColor !== 'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)'"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
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
    <div class="text-center">
      <img  src="/Injazat.png" alt="" class="logo-height">
    </div>
<!--    <v-list-->
<!--    dense-->
<!--    nav-->
<!--  >-->
<!--    <v-list-item>-->
<!--&lt;!&ndash;      <v-list-item-avatar&ndash;&gt;-->
<!--&lt;!&ndash;        class="align-self-center"&ndash;&gt;-->
<!--&lt;!&ndash;        color="white"&ndash;&gt;-->
<!--&lt;!&ndash;        contain&ndash;&gt;-->
<!--&lt;!&ndash;      >&ndash;&gt;-->
<!--&lt;!&ndash;        <v-img&ndash;&gt;-->
<!--&lt;!&ndash;          src=""&ndash;&gt;-->
<!--&lt;!&ndash;          max-height="30"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--&lt;!&ndash;      </v-list-item-avatar>&ndash;&gt;-->

<!--      <v-list-item-content>-->
<!--&lt;!&ndash;        <v-list-item-title&ndash;&gt;-->
<!--&lt;!&ndash;          class="display-1"&ndash;&gt;-->
<!--&lt;!&ndash;          v-text="profile.title"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--        <v-img-->
<!--          src="/Injazat.png"-->
<!--          max-height="50"-->
<!--        />-->
<!--      </v-list-item-content>-->
<!--    </v-list-item>-->
<!--  </v-list>-->

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

          :value="false">
          <template v-slot:activator>
            <v-icon>mdi-apps</v-icon>
            <v-list-item-title class="text-center mr-7">Setup</v-list-item-title>
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
              <!--                <v-list-item-action>-->
              <!--                  <v-icon>mdi-school</v-icon>-->
              <!--                </v-list-item-action>-->
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
                <v-list-item-title>Application Preferences</v-list-item-title>
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
          <v-list-item link to="/setup/letter">
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

<style lang="sass" >

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

        .v-list-group--active .primary--text
          color: #D9D9D9 !important
          caret-color: #D9D9D9 !important
        .v-application .primary--text
           color: #D9D9D9 !important
           caret-color: #D9D9D9 !important
</style>
