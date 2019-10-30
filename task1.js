function AccountBalance() {
  //private props
  let debit = 0
  let credit = 0

  //public interface
  this.addDebit = function(value) {
    if (!isNaN(+value)) debit += value
  }

  this.addCredit = function(value) {
    if (!isNaN(+value)) credit += value
  }

  this.calcBalance = function() {
    return debit - credit
  }

  this.clear = function() {
    debit = 0
    credit = 0
  }
}
