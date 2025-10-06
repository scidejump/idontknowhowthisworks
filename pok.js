import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "pokertheory";
var name = "Poker Theory";
var description = "oh no";
var authors = "scbose";
var version = 0.11;

var currency;
var fold, check, raise, allin
var deck = []
for (let i = 1; i < 53; i++) {
  deck += i
}
theory.primaryEquationHeight=100;


var init = () => {
  currency = theory.createCurrency()

  //actions
  //fold
  {
    let getDesc = (level) => "Fold"
// i dont know how to make a button do things
    fold = theory.createUpgrade(0, currency, new ExponentialCost(0, 0));
