<template>
  <div id="settingsPage">
    <nav class="navbar">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#" style="color:black;">
              <span class="glyphicon glyphicon-bell"></span>
            </a>
          </li>
          <li>
            <a href="#" style="color:black;">Upgrade</a>
          </li>
          <li>
            <a href="#" style="color:black;">Sign Out</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="settingsHeading">
      <h2>All your</h2>
      <h2>settings in one place.</h2>
      <h6>Manage account details, billing and users.</h6>
    </div>
    <form class="review-form" @submit.prevent="validateUser">
      <div id="formBackground">
        <div class="row">
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('name')">
                <label for="last-name">Name</label>
                <md-input
                  name="name"
                  id="name"
                  autocomplete="family-name"
                  v-model="form.name"
                />
                <span class="md-error" v-if="!$v.form.name.required"
                  >The name is required</span
                >
                <span class="md-error" v-else-if="!$v.form.name.minlength"
                  >Minimum Name length: 3</span
                >
              </md-field>
            </md-card>
          </div>
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('company')">
                <label for="company">Company</label>
                <md-input
                  name="company"
                  id="company"
                  autocomplete="company"
                  v-model="form.company"
                />
                <span class="md-error" v-if="!$v.form.company.required"
                  >The company name is required</span
                >
              </md-field>
            </md-card>
          </div>
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  v-model="form.email"
                />
                <span class="md-error" v-if="!$v.form.email.required"
                  >The email is required</span
                >
                <span class="md-error" v-else-if="!$v.form.email.email"
                  >Invalid email</span
                >
              </md-field>
            </md-card>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field
                :class="getValidationClass('currentPassword')"
                :md-toggle-password="false"
              >
                <label for="current-password">Current Password</label>
                <md-input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  autocomplete="current-password"
                  v-model="form.currentPassword"
                />
                <span class="md-error" v-if="!$v.form.currentPassword.required"
                  >Password is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.currentPassword.minlength"
                  >Minimum Password length: 5</span
                >
              </md-field>
            </md-card>
          </div>
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field
                :class="getValidationClass('newPassword')"
                :md-toggle-password="false"
              >
                <label for="new-password">New Password</label>
                <md-input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  autocomplete="new-password"
                  v-model="form.newPassword"
                />
                <span class="md-error" v-if="!$v.form.newPassword.required"
                  >Password is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.newPassword.minlength"
                  >Minimum Password length: 5</span
                >
              </md-field>
            </md-card>
          </div>
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field
                :class="getValidationClass('repeatPassword')"
                :md-toggle-password="false"
              >
                <label for="repeat-password">Repeat Password</label>
                <md-input
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  autocomplete="repeat-password"
                  v-model="form.repeatPassword"
                />
                <span class="md-error" v-if="!$v.form.repeatPassword.required"
                  >Password is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.repeatPassword.minlength"
                  >Minimum Password length: 5</span
                >
              </md-field>
            </md-card>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('cardNumber')">
                <label for="card-number">Card Number</label>
                <md-input
                  name="cardNumber"
                  id="cardNumber"
                  autocomplete="card-number"
                  v-model="form.cardNumber"
                />
                <span class="md-error" v-if="!$v.form.cardNumber.required"
                  >Card Number is required</span
                >
                <span class="md-error" v-else-if="!$v.form.cardNumber.minlength"
                  >Valid Length: 19 (____-____-____-____)</span
                >
                <span class="md-error" v-else-if="!$v.form.cardNumber.maxlength"
                  >Valid Length: 19 (____-____-____-____)</span
                >
              </md-field>
            </md-card>
          </div>
          <div class="col-sm-4">
            <md-card class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('expiration')">
                <label for="expiration">Expiration</label>
                <md-input
                  name="expiration"
                  id="expiration"
                  autocomplete="expiration"
                  v-model="form.expiration"
                />
                <span class="md-error" v-if="!$v.form.expiration.required"
                  >Expiration is required - (MM/DD)</span
                >
              </md-field>
            </md-card>
          </div>
          <div class="col-sm-2">
            <md-card class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('cvv')">
                <label for="cvv">CVV</label>
                <md-input
                  name="cvv"
                  id="cvv"
                  autocomplete="cvv"
                  v-model="form.cvv"
                />
                <span class="md-error" v-if="!$v.form.cvv.required"
                  >CVV is required</span
                >
                <span class="md-error" v-else-if="!$v.form.cvv.minlength"
                  >Valid Length: 3</span
                >
                <span class="md-error" v-else-if="!$v.form.cvv.maxlength"
                  >Valid Length: 3</span
                >
              </md-field>
            </md-card>
          </div>
          <div class="col-sm-2">
            <md-card class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('zip')">
                <label for="zip">ZIP</label>
                <md-input
                  name="zip"
                  id="zip"
                  autocomplete="zip"
                  v-model="form.zip"
                />
                <span class="md-error" v-if="!$v.form.zip.required"
                  >zip is required</span
                >
              </md-field>
            </md-card>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <md-card class="md-layout-item md-small-size-100">
              <h4>Membership</h4>
              <h6>Switch to another plan or cancel membership.</h6>
              <h5>Current plan</h5>

              <md-card class="md-layout-item md-size-100">
                <div
                  @click="selectedMembership(premium)"
                  class="membershipClass"
                >
                  Premium
                  <p style="float:right">$799/mo</p>
                  <p>Supports 10M rows of data + 5 free user seats</p>
                </div>
              </md-card>
              <h5>Other plans</h5>

              <md-card class="md-layout-item md-size-100">
                <div @click="selectedMembership(basic)" class="membershipClass">
                  Basic
                  <p style="float:right">$299 /mo</p>
                  <p>Supports 500K rows of data+ 1 free user seat</p>
                </div>
              </md-card>
              <br />
              <md-card class="md-layout-item md-size-100">
                <div
                  @click="selectedMembership(standard)"
                  class="membershipClass"
                >
                  Standard
                  <p style="float:right">$499/mo</p>
                  <p>Supports 5M rows of data + 3 free user seats</p>
                </div>
              </md-card>
              <br />
              <br />
              <p>
                To cancel membership email us at
                <a>info@obviously.ai</a> .
              </p>
              <br />
            </md-card>
          </div>
          <div class="col-sm-6">
            <md-card class="md-layout-item md-small-size-100">
              <h4>User seats</h4>
              <h6>Invite another user from your company to Obviously AI.</h6>
              <div class="row">
                <div class="col-sm-5">
                  <md-card class="md-layout-item md-small-size-100">
                    <md-field
                      :class="getAddedUserValidationClass('addUserSeatName')"
                    >
                      <label for="addUserSeatName">Name</label>
                      <md-input
                        name="addUserSeatName"
                        id="addUserSeatName"
                        autocomplete="addUserSeatName"
                        v-model="adduser.addUserSeatName"
                      />
                      <span
                        class="md-error"
                        v-if="!$v.adduser.addUserSeatName.required"
                        >The name is required</span
                      >
                      <span
                        class="md-error"
                        v-else-if="!$v.adduser.addUserSeatName.minlength"
                        >Minimum Name length: 3</span
                      >
                    </md-field>
                  </md-card>
                </div>
                <div class="col-sm-5">
                  <md-card class="md-layout-item md-small-size-100">
                    <md-field
                      :class="getAddedUserValidationClass('addUserSeatEmail')"
                    >
                      <label for="addUserSeatEmail">Email</label>
                      <md-input
                        type="email"
                        name="addUserSeatEmail"
                        id="addUserSeatEmail"
                        autocomplete="addUserSeatEmail"
                        v-model="adduser.addUserSeatEmail"
                      />
                      <span
                        class="md-error"
                        v-if="!$v.adduser.addUserSeatEmail.required"
                        >The Email is required</span
                      >
                      <span
                        class="md-error"
                        v-else-if="!$v.adduser.addUserSeatEmail.email"
                        >Invalid email</span
                      >
                    </md-field>
                  </md-card>
                </div>
                <div class="col-sm-2">
                  <md-card
                    class="md-layout-item md-small-size-100"
                    style="text-align:center; min-height: 54px; padding-top: 10%;"
                  >
                    <h2 @click="validateAddedUser()">+</h2>
                  </md-card>
                </div>
              </div>
              <h4>Existing users</h4>
              <div class="row">
                <div
                  v-for="(user, index) in form.userSeats"
                  :key="index"
                  class="col-sm-6"
                >
                  <!-- <div style="width:40%; display:inline;"> -->
                  <!-- start -->
                  <md-card class="md-layout-item md-size-100">
                    <div class="row" style="padding-top: 5%; font-size: 160%;">
                      <div class="col-sm-7">{{ user.addedUserName }}</div>
                      <div class="col-sm-5">
                        <a href="#" style="color:lightgrey; float:right;">
                          <span
                            class="glyphicon glyphicon-remove"
                            style="color:red;"
                            @click="removeUser(index)"
                          ></span>
                          <br />
                          <p class="glyphiconFont" style="color:red">Remove</p>
                        </a>
                        <a
                          href="#"
                          style="color:lightgrey; float:right; padding-right:5%"
                        >
                          <span
                            class="glyphicon glyphicon-user"
                            :style="{ color: user.admin }"
                            @click="changeAdminStatus(index)"
                          ></span>
                          <br />
                          <p class="glyphiconFont">Admin</p>
                        </a>
                      </div>
                    </div>
                    <div class="row" style="font-size: 90%; padding-left: 7%;">
                      {{ user.addedUserEmail }}
                    </div>
                  </md-card>
                  <br />
                  <!-- end -->
                  <!-- </div> -->
                </div>
              </div>
              <p>
                You have {{ 5 - form.userSeats.length }} of 5 free seats left.
                Your card will be charged $10 /mo for each additional user
                thereon.
              </p>
            </md-card>
          </div>
        </div>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary settingsButton"
            >Update all settings</md-button
          >
        </md-card-actions>
      </div>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
var userArray = []

export default {
  name: 'FormValidation',
  mixins: [validationMixin],
  data: () => ({
    form: {
      name: null,
      company: null,
      email: null,
      currentPassword: null,
      newPassword: null,
      repeatPassword: null,
      membership: null,
      userSeats: [
        {
          addedUserName: 'Monica Greenleaf',
          addedUserEmail: 'monica.greenleaf@microsoft.com',
          admin: 'green',
          isadmin: true
        },
        {
          addedUserName: 'John Wick',
          addedUserEmail: 'john.wick@microsoft.com',
          admin: 'lightgrey',
          isadmin: false
        },
        {
          addedUserName: 'Tom Cruise',
          addedUserEmail: 'tom.cruise@microsoft.com',
          admin: 'lightgrey',
          isadmin: false
        },
        {
          addedUserName: 'Emma Stone',
          addedUserEmail: 'emma.stone@microsoft.com',
          admin: 'lightgrey',
          isadmin: false
        }
      ]
    },
    adduser: {
      addUserSeatName: null,
      addUserSeatEmail: null
    },
    savedSettings: null,
    premium: {
      membershipType: 'premium',
      rates: '$799/mo',
      planDesc: 'Supports 10M rows of data + 5 free user seats'
    },
    basic: {
      membershipType: 'Basic ',
      rates: '$299/mo',
      planDesc: 'Supports 500K rows of data + 1 free user seat'
    },
    standard: {
      membershipType: 'Standard',
      rates: '$499/mo',
      planDesc: 'Supports 5M rows of data + 3 free user seats'
    },
    validityUserName: false,
    validityUserEmail: false
  }),
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
      company: {
        required
      },
      email: {
        required,
        email
      },
      currentPassword: {
        required,
        minLength: minLength(5)
      },
      newPassword: {
        required,
        minLength: minLength(5)
      },
      repeatPassword: {
        required,
        minLength: minLength(5)
      },
      cardNumber: {
        required,
        minLength: minLength(19),
        maxLength: maxLength(19)
      },
      expiration: {
        required
      },
      cvv: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(3)
      },
      zip: {
        required
      }
    },
    adduser: {
      addUserSeatName: {
        required,
        minLength: minLength(3)
      },
      addUserSeatEmail: {
        required,
        email
      }
    }
  },
  methods: {
    removeUser(index) {
      this.form.userSeats.splice(index, 1)
    },
    changeAdminStatus(index) {
      if (this.form.userSeats[index].admin == 'green') {
        this.form.userSeats[index].admin = 'lightgrey'
        this.form.userSeats[index].isadmin = false
      } else {
        this.form.userSeats[index].admin = 'green'
        this.form.userSeats[index].isadmin = true
      }
    },
    selectedMembership(clickedMembership) {
      alert('Selected new membership plan')
      console.log(
        'The selected membership is: ' + clickedMembership.membershipType
      )
      this.form.membership = clickedMembership
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm() {
      this.$v.$reset()
      this.form.name = null
      this.form.company = null
      this.form.email = null
      this.form.currentPassword = null
      this.form.newPassword = null
      this.form.repeatPassword = null
      this.form.cardNumber = null
      this.form.expiration = null
      this.form.cvv = null
      this.form.zip = null
      this.adduser.addUserSeatName = null
      this.adduser.addUserSeatEmail = null
    },

    saveUser() {
      console.log('The settings are updated.')
      alert('The settings have been successfully updated.')
      this.savedSettings = {
        name: this.form.name,
        company: this.form.company,
        email: this.form.email,
        currentPassword: this.form.currentPassword,
        newPassword: this.form.newPassword,
        repeatPassword: this.form.repeatPassword,
        cardNumber: this.form.cardNumber,
        expiration: this.form.expiration,
        cvv: this.form.cvv,
        zip: this.form.zip,
        membership: this.form.membership,
        userSeats: this.form.userSeats
      }
      console.log('The Data entered is : ', this.savedSettings)
      //this.clearForm()
    },
    validateUser() {
      let validateNewPassword = true
      this.$v.$touch()
      if (this.form.newPassword != this.form.repeatPassword) {
        validateNewPassword = false
        alert('New password and Repeat Password should match.')
      }
      if (!this.$v.$invalid && validateNewPassword === true) {
        this.saveUser()
      }
    },
    getAddedUserValidationClass(fieldName) {
      const field = this.$v.adduser[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    validateAddedUser() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        var newUser = {
          addedUserName: this.adduser.addUserSeatName,
          addedUserEmail: this.adduser.addUserSeatEmail,
          admin: 'lightgrey',
          isadmin: false
        }
        userArray.push(newUser)
        this.form.userSeats = this.form.userSeats.concat(userArray)
        userArray = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'MyWebFont';
  src: url('../assets/fonts/HammersmithOne-Regular.ttf');
}
html,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font: inherit;
  font-family: MyWebFont;
  color: black;
}
.userGlyphicon {
  color: green;
}
.md-card {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 1%;
}

.md-card-content {
  padding: 5%;
  margin: 2%;
}
.md-card-content:last-of-type {
  padding-bottom: 0px;
}
#settingsPage {
  height: 100vh;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('~@/assets/images/group.svg');
}
#settingsHeading {
  margin-top: 23%;
}
#formBackground {
  margin-right: 2%;
}
.settingsButton {
  width: 100%;
}
.membershipClass {
  padding: 1%;
}
.glyphiconFont {
  font-size: 40%;
}
h2 {
  line-height: 0.5;
  font-size: 200%;
}
h3 {
  font-size: 155%;
}
h4 {
  font-size: 150%;
  font-weight: lighter !important;
}
h5 {
  font-size: 130%;
  font-weight: lighter !important;
}
h6 {
  line-height: 2;
  font-weight: lighter !important;
}
</style>
