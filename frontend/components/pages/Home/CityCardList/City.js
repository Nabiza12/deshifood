const cityData = [
  {
    id: 1,
    District: "Barguna",
    Division: "Barisal",
    famousFood: [
      {
        id: 1,
        foodName: "Chuiya Pitha",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " Chyaba Pitha",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: " Muitta Pitha",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1Ea0phfdkvQVQHUGvSOBraRKEwawsDvxW/view?usp=share_link",
  },
  {
    id: 2,
    District: "Barisal",
    Division: "Barisal",
    famousFood: [
      {
        id: 1,
        foodName: "Hog Pulm",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Hilsa Fish",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Barisal.jpg?width=720",
  },
  {
    id: 3,
    District: "Bhola",
    Division: "Barisal",
    famousFood: [
      {
        id: 1,
        foodName: "Coconut",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "buffalo milk",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1GuZG1-zHlmy1q3BwX7zgz4FiSbeF170u/view?usp=share_link",
  },
  {
    id: 4,
    District: "Jhalokati",
    Division: "Barisal",
    famousFood: [
      {
        id: 1,
        foodName: "Flour",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1qnbOdyO8fqnvdG_dmL30zBmjdle21B5S/view?usp=share_link",
  },
  {
    id: 5,
    District: "Patuakhali",
    Division: "Barisal",
    famousFood: [
      {
        id: 1,
        foodName: "Buffalo milk yogurt",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1QKChfsdwEPolgUEHHz2XvJxeMvklsWqp/view?usp=share_link",
  },
  {
    id: 6,
    District: "Pirojpur",
    Division: "Barisal",
    famousFood: [
      {
        id: 1,
        foodName: "Guava",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "coconut",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "betel nut",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 4,
        foodName: "mango",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1oUHhsv6U8Ii98qgPTwayWzNHYiIZRveg/view?usp=share_link",
  },
  {
    id: 7,
    District: "Bandarban",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Heel juice",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1TiMFtBKAjGTwkTATk-PcO9k9xuiBz5J0/view?usp=share_link",
  },
  {
    id: 8,
    District: "Brahmanbaria",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Tal bara",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "chanamukhi",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "rasmalai",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1jrfvjGqflhnaWwFbDGnB7ZisvcsZpTPA/view?usp=share_link",
  },
  {
    id: 9,
    District: "Chandpur",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Hilsa Fish",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/17w0YwW7Mh97lzEdN9bZ8MnfSvk0elfdI/view?usp=share_link",
  },
  {
    id: 10,
    District: "Chittagong",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Mejabani Beef",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Dry Fish",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Chittagong.jpg?width=720",
  },
  {
    id: 11,
    District: "Cumilla",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Rasmalai of Matrivandar",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-cumilla.jpg?width=720",
  },
  {
    id: 12,
    District: "Cox’s Bazar",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Sweet Betel leaf",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Dry Fish",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Cox's%20Bazaar.jpg?width=720",
  },
  {
    id: 13,
    District: "Feni",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Buffalo milk ghee",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "khandal sweet",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/13OnBRdsa4m9fRCfPldjfZHRa1snRAs8l/view?usp=share_link",
  },
  {
    id: 14,
    District: "Khagrachhari",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "turmeric",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1Yaqw2m4n_poKcFf7kmMrZcGCdP5AAx2_/view?usp=share_link",
  },
  {
    id: 15,
    District: "Lakshmipur",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Betel Nut",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1z2w-jrsYdvCPuHfECndFJan-Q2OBSMya/view?usp=share_link",
  },
  {
    id: 16,
    District: "Noakhali",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Coconut nadu",
        image: "",
        price: "100",
        Discount: "10%",
      },
      
      {
        id: 3,
        foodName: " khalaja pitha",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1jkgyYBrP9UAKjINVq832W9IIIWTkMiZm/view?usp=share_link",
  },
  {
    id: 17,
    District: "Rangamati",
    Division: "Chittagong",
    famousFood: [
      {
        id: 1,
        foodName: "Pineapple",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "jackfruit",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "banana",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1FUs-3lSJmWB1epe9JmjXWXCJXVn__hrv/view?usp=share_link",
  },
  {
    id: 18,
    District: "Dhaka",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Bakarkhani",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Biryani",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Dhaka.jpg?width=720",
  },
  {
    id: 19,
    District: "Faridpur",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Date juice",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1Cd8yWsd1hLPOgeWXE3j_8ujFgFklFvIl/view?usp=share_link",
  },
  {
    id: 20,
    District: "Gazipur",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Jackfruit",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " guava",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Tongi.jpg?width=720",
  },
  {
    id: 21,
    District: "Gopalganj",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Rasgolla",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "curd jilapi",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1DYuJ0wmaC3sfKUSaIFgC1eAC8iK9YnEi/view?usp=share_link",
  },
  {
    id: 22,
    District: "Kishoreganj",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Balish Sweet",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1y_L6cq--j4VuSDqLXYgRefIy32dZWWyX/view?usp=share_link",
  },
  {
    id: 23,
    District: "Madaripur",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Rasgolla",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Date Juice",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1dHLXN4rHjPKZ_wjiz-jEQJJgz6yuNWMZ/view?usp=share_link",
  },
  {
    id: 24,
    District: "Manikganj",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Date molasses",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1i_1_adWYQxTQ-QPj6ISR78yHRMTf8jnI/view?usp=share_link",
  },
  {
    id: 25,
    District: "Munshiganj",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Sweet of Vagyokul",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1wUdj-rZa09rgNRJSK0M3CIE--8gI8cb5/view?usp=share_link",
  },
  {
    id: 26,
    District: "Narayanganj",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Rasmalai",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1VzMA603IX_DfGggb8UmmOhgzdmoR4ZZ7/view?usp=share_link",
  },
  {
    id: 27,
    District: "Narsingdi",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Banana",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1MbfPQ4ZzxWKn9g5VGArXoWOrHd1Z7Ueq/view?usp=share_link",
  },
  {
    id: 28,
    District: "Rajbari",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Chomchom",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " Date molasses",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1sYlp0BuOOk_NQeFEGYhr1CbSaUmgRYeS/view?usp=share_link",
  },
  {
    id: 29,
    District: "Shariatpur",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Bibikhana Cake (Bibikhana Pitha)",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1DQCyte1cNbZeREMlSzVt8sEs2AgU0JGf/view?usp=share_link",
  },
  {
    id: 30,
    District: "Tangail",
    Division: "Dhaka",
    famousFood: [
      {
        id: 1,
        foodName: "Chamcham",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1AW6vrlP7ocQohgY1XFy7rOmWh4Sxm3tB/view?usp=share_link",
  },
  {
    id: 31,
    District: "Bagerhat",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Shrimp",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "betel nut",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1oUqd0gSrA1--ruyTIw_Eax_-fWdmySId/view?usp=share_link",
  },
  {
    id: 32,
    District: "Chuadanga",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Drink",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "corn",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1KDBKvInTY7Bj5zcP-vUWBJ6HvULykLAk/view?usp=share_link",
  },
  {
    id: 33,
    District: "Jessore",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Parched rice",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "date molasses",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "Jamtala sweets",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1kJg-qKfBVF_aepHPT9qESvLD7rWSFsMl/view?usp=share_link",
  },
  {
    id: 34,
    District: "Jhenaidah",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Hari’s paddy",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "manager’s paddy",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1LEen01TDf00m01arqqzs7po5deMbh0ik/view?usp=share_link",
  },
  {
    id: 36,
    District: "Khulna",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Sandesh",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " coconut",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: " lobster",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Khulna.jpg?width=720",
  },
  {
    id: 37,
    District: "Kushtia",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Sesame khwaja",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " kulfi malai",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1pzzSBSSgwgZ57rfMvV6HzyHtrEYU91zK/view?usp=share_link",
  },
  {
    id: 38,
    District: "Magura",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Rasmalai",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1v5Ge0Yzxg4UTlQ3_9YeRX_bSmKBrxzko/view?usp=share_link",
  },
  {
    id: 39,
    District: "Meherpur",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Shabitri Sweet",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Rosh Kodombo",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1Sj2CQjAJqXpgahUP4O9jibbhfb1wzWk7/view?usp=share_link",
  },
  {
    id: 40,
    District: "Narail",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Pera Sandesh",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " date molasses,",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "date juice",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1eD9lciZQgOgWJOfC-t7diAxycMlGia32/view?usp=share_link",
  },
  {
    id: 41,
    District: "Satkhira",
    Division: "Khulna",
    famousFood: [
      {
        id: 1,
        foodName: "Sandesh",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1owtqe6oKkM6Gk3iwJj_mJwr8u969vX3l/view?usp=share_link",
  },
  {
    id: 42,
    District: "Jamalpur",
    Division: "Mymensingh",
    famousFood: [
      {
        id: 1,
        foodName: "Curd Polao",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " Curd Payes",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1BzHCbJylf5zQvZSJwmCRjo5M3ybAqQMO/view?usp=share_link",
  },
  {
    id: 43,
    District: "Mymensingh",
    Division: "Mymensingh",
    famousFood: [
      {
        id: 1,
        foodName: "Monda Sweet of Muktagacha",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1Re-7dqAM1qXPO1cZufpOnKcn_HRLKVLu/view?usp=share_link",
  },
  {
    id: 44,
    District: "Netrokona",
    Division: "Mymensingh",
    famousFood: [
      {
        id: 1,
        foodName: "Balish Sweet",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/15gd6-Ff03_A8sfRY9wwDWwfJiltqCNFs/view?usp=share_link",
  },
  {
    id: 45,
    District: "Sherpur",
    Division: "Mymensingh",
    famousFood: [
      {
        id: 1,
        foodName: "Chop",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " Curd Payes",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/10bc6LOuWtnYZ9e11CG9-Pd0u8gNE8Z_I/view?usp=share_link",
  },
  {
    id: 46,
    District: "Bogra",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Yogurt",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " Mahasthangar katakati",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "pepper",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1MTxWV0Sx_29IfSFaXtwTLTQErvISHwSB/view?usp=share_link",
  },
  {
    id: 47,
    District: "Joypurhat",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Chotpoti",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1haHlg432Cimo8-CddpUsQ10iqX_0jpsb/view?usp=share_link",
  },
  {
    id: 48,
    District: "Naogaon",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Rice",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Sandesh",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1zXuNNT6Eg3iLUdg9i_fGIDUJxpG_mV9a/view?usp=share_link",
  },
  {
    id: 49,
    District: "Natore",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Kachagolla Sweet",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1cb41QThfv4iIXg8-ZpJbfnqY_4NjYCwp/view?usp=share_link",
  },
  {
    id: 50,
    District: "Chapainawabganj",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Mango",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Chomchom of Shibgonj",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "Masakalai’s bread",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1MuR2RJjQs_1Z8PqFkWM0vZIR6XkKjhpg/view?usp=share_link",
  },
  {
    id: 51,
    District: "Pabna",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Ghee",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: " Pera Sandesh of Paradise",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1VsOORsePRO8EUfAo8vF71B2kwGMADQPn/view?usp=share_link",
  },
  {
    id: 52,
    District: "Rajshahi",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Mango",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Maskalai Bread",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "Cow Stomach fry & puri",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Rajshahi.jpg?width=720",
  },
  {
    id: 53,
    District: "Sirajganj",
    Division: "Rajshahi",
    famousFood: [
      {
        id: 1,
        foodName: "Panitowa",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1cRJwQJtWKebm1CcuVWTIr4OiyyhYSLKs/view?usp=share_link",
  },
  {
    id: 54,
    District: "Dinajpur",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "Litchi",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Kataribhog rice",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: "Chira",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1Ka_liE2WPjTFRSX3Fh7bSktuf5dCalQ_/view?usp=share_link",
  },
  {
    id: 55,
    District: "Gaibandha",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "Rosh Malai",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1U9QD8RPrgCOPFixVXouLmcN2XiuPBjpj/view?usp=share_link",
  },
  {
    id: 56,
    District: "Kurigram",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "Chomchom",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1zSXlK5Y66dLikGts6Z4NEa4YTwa5mipV/view?usp=share_link",
  },
  {
    id: 57,
    District: "Lalmonirhat",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "Juice",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1RWcOaFAc_Lzr0qElrNj-XvDwhN8NSWpN/view?usp=share_link",
  },
  {
    id: 58,
    District: "Nilphamari",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "Shondesh of Domar",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/12QmZ7Y3OZokbbczmGh2QkYVnmzTc2EmR/view?usp=share_link",
  },
  {
    id: 59,
    District: "Panchagarh",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "Egg Curry",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/115PDFUmtiLvXVgAalivDgNKnAZvDcmFu/view?usp=share_link",
  },
  {
    id: 60,
    District: "Rangpur",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "sugarcane",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Harivanga mango",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-tile-Rangpur.jpg?width=720",
  },
  {
    id: 61,
    District: "Thakurgaon",
    Division: "Rangpur",
    famousFood: [
      {
        id: 1,
        foodName: "Shurjopuri Mango",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1U3u24xrlvDNesR3SJYSOJnrm0fnUCc1m/view?usp=share_link",
  },
  {
    id: 62,
    District: "Habiganj",
    Division: "Sylhet",
    famousFood: [
      {
        id: 1,
        foodName: "Tea",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1c6NGrxklo4G-svtfXzlTjpMIrq5RsHbG/view?usp=share_link",
  },
  {
    id: 63,
    District: "Moulvibazar",
    Division: "Sylhet",
    famousFood: [
      {
        id: 1,
        foodName: "Roshogolla of Manager Store",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "Khasia Betel leaf",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1AaxWFP-IYL2gmixIdPI8cd4SYkpIwezU/view?usp=share_link",
  },
  {
    id: 64,
    District: "Sunamganj",
    Division: "Sylhet",
    famousFood: [
      {
        id: 1,
        foodName: "Sweets of Deshbondhu",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://drive.google.com/file/d/1Rf1-hymAclmyV_-wFIrl7DCyn7UYq24f/view?usp=share_link",
  },
  {
    id: 65,
    District: "Sylhet",
    Division: "Sylhet",
    famousFood: [
      {
        id: 1,
        foodName: "Tea",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 2,
        foodName: "oranges",
        image: "",
        price: "100",
        Discount: "10%",
      },
      {
        id: 3,
        foodName: " pickles od Shatkora",
        image: "",
        price: "100",
        Discount: "10%",
      },
    ],
    ImageUrl:
      "https://images.deliveryhero.io/image/fd-bd/city-title/city-title-Sylhet.jpg?width=720",
  },
];

export { cityData };
