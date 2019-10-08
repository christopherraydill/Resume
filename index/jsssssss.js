
// Web Dev 2 - vue.js script
// Filename: jsssssss.js
//
// Author:   Christopher Dill
// Date:     12/14/2016
// CIS 131 Web Development II

// vue.js application and instance
var itemsToSell = new Vue({
  el: '#veiwToSell',
  data: {
    theProduct : [{
      title : 'Uncharted 4: A Thief`s End',
      picture : 'images/uate.png',
      description : 'Several years after his last adventure, retired fortune hunter, Nathan Drake, is forced back into the world of thieves.  With the stakes much more personal, Drake embarks on a globe-trotting journey in pursuit of a historical conspiracy behind a fabled pirate treasure.  His greatest adventure will test his physical limits, his resolve, and ultimately what he’s willing to sacrifice to save the ones he loves.',
      button : '1',
    },{
      title : ' Overwatch ',
      picture : 'images/ow.png',
      description : 'In a time of global crisis, an international task force of heroes banded together to restore peace to a war-torn world. This organization, known as Overwatch, ended the crisis and helped maintain peace for a generation, inspiring an era of exploration, innovation, and discovery.',
      button : '2',
    },{
      title : ' Forza Horizon 3 ',
      picture : 'images/fh.png',
      description : 'Forza Horizon 3 is an open world racing video game developed by Playground Games and published by Microsoft Studios for Xbox One and Microsoft Windows. ... The game was released on 23 September 2016 for &rdquo;Ultimate Edition&rdquo; players, and 27 September 2016 for standard and &rdquo;Deluxe Edition&rdquo; players.',
      button : '3',
    }
  ],
    // this was the only way I found would work for me
    stock1 : 5,
    inCart1 : 0,
    itemCostTotal1 : 0,
    price1 : 39.99,
    stock2 : 2,
    inCart2 : 0,
    itemCostTotal2 : 0,
    price2 : 69.99,
    stock3 : 8,
    inCart3 : 0,
    itemCostTotal3 : 0,
    price3 : 59.99,
    totleCost : 0,
    theNumberStoper : 5,
    totalNumberOfItems : 0
  },
  methods: {
    // finds and adds 1 stock to the index referance
    addToCart: function (index){
      if (index == 1) {
        if (this.stock1 > 0) {
          this.stock1 -= 1
          this.inCart1 += 1
        }
        }else if (index == 2) {
          if (this.stock2 > 0) {
            this.stock2 -= 1
            this.inCart2 += 1
          }
        }else {
          if (this.stock3 > 0) {
            this.stock3 -= 1
            this.inCart3 += 1
          }
        }
        if (this.stock1 == 0) {
          this.itemCostTotal1 = 199.95
        }else {
          this.itemCostTotal1 = this.inCart1 * this.price1
        }
        this.itemCostTotal2 = this.inCart2 * this.price2
        this.itemCostTotal3 = this.inCart3 * this.price3
        this.totleCost = this.itemCostTotal1 + this.itemCostTotal2 + this.itemCostTotal3
        this.totalNumberOfItems = this.inCart1 + this.inCart2 + this.inCart3
      },
      // finds and subtracts 1 stock to the index referance
    takeFromCart: function (index) {
      if (index == 1) {
        if (this.inCart1 > 0) {
          this.stock1 += 1
          this.inCart1 -= 1
        }
      }else if (index == 2) {
        if (this.inCart2 > 0) {
          this.stock2 += 1
          this.inCart2 -= 1
        }
      }else {
        if (this.inCart3 > 0) {
          this.stock3 += 1
          this.inCart3 -= 1
        }
      }
      this.totalNumberOfItems = this.inCart1 + this.inCart2 + this.inCart3
    },
    // resets all inCarts to 0 and all stocks back to the way they were
    takeAllFromCart: function (index) {
        if (index == 1) {
          if (this.stock1 >= 0 && this.stock1 <= 5) {
            this.stock1 = this.stock1 + this.inCart1
            this.inCart1 = 0
          }
        }else if (index == 2) {
          if (this.stock2 >= 0 && this.stock2 <= 2) {
            this.stock2 = this.stock2 + this.inCart2
            this.inCart2 = 0
          }
        }else if (index == 4) {
          if (this.stock1 >= 0 && this.stock1 <= 5) {
            this.stock1 = this.stock1 + this.inCart1
            this.inCart1 = 0
            this.totleCost = 0
          }
          if (this.stock2 >= 0 && this.stock2 <= 2) {
            this.stock2 = this.stock2 + this.inCart2
            this.inCart2 = 0
          }
          if (this.stock3 >= 0 && this.stock3 <= 8) {
            this.stock3 = this.stock3 + this.inCart3
            this.inCart3 = 0
          }

        }else {
          if (this.stock3 >= 0 && this.stock3 <= 8) {
            this.stock3 = this.stock3 + this.inCart3
            this.inCart3 = 0
          }
        }
        this.itemCostTotal1 = this.inCart1 * this.price1
        this.itemCostTotal2 = this.inCart2 * this.price2
        this.itemCostTotal3 = this.inCart3 * this.price3
        this.totleCost = this.itemCostTotal1 + this.itemCostTotal2 + this.itemCostTotal3
        this.totalNumberOfItems = this.inCart1 + this.inCart2 + this.inCart3
    }
  }
})
