<template>
  <mu-container>
    <mu-form ref="_form" :model="form" :inline="true" label-position="left" label-width="100" :auto-validate="true">
      <mu-form-item prop="diceCmd" help-text="1d6-1 or 2d100+1" label="Dice" :rules="diceCmdRules">
        <mu-text-field v-model="form.diceCmd" prop="diceCmd"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">Roll the Dice</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
import Roll from 'roll';

const roll = new Roll();

export default {
  name: 'Room',
  data () {
    return {
      form: {
        diceCmd: '1d6'
      },
      diceCmdRules: [
        { validate: (val) => !!val, message: 'Must enter a dice command' },
        { validate: (val) => this.diceRegex.test(val), message: 'Dice command error!' }
      ],
      diceRegex: /^(\d{1,2})d(\d{1,3})([+-]\d+?)?$/
    };
  },
  methods: {
    async submit () {
      const result = await this.$refs._form.validate();
      if (result) {
        console.log(`Room: ${this.$route.params.room}; Dice: ${this.form.diceCmd}`);
        console.log(roll);
        const diceResult = roll.roll(this.form.diceCmd);
        console.log(`Dice result: ${diceResult.result}`);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
