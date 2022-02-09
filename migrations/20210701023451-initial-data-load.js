module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('fights', [{
      name: 'Floyd Mayweather',
      record: '50-0',
      nationality: 'American',
      website: 'https://floydmayweather.com/'
    }, {
      name: 'Conor McGregor',
      record: '22-5',
      nationality: 'Irish',
      website: 'https://conormcgregor.com/'
    }
    ])

    return queryInterface.bulkInsert('matches', [{
      date_of_fight: '1996-10-11',
      fighter: 'Roberto Apodaca',
      outcome: 'KO2',
      fighterId: 1
    }, {
      date_of_fight: '1996-11-30',
      fighter: 'Reggie Sanders',
      outcome: 'W4',
      fighterId: 1
    }, {
      date_of_fight: '1997-01-18',
      fighter: 'Jerry Cooper',
      outcome: 'TKO',
      fighterId: 1
    }, {
      date_of_fight: '1997-02-01',
      fighter: 'Edgar Ayala',
      outcome: 'KO2',
      fighterId: 1
    }, {
      date_of_fight: '1997-03-12',
      fighter: 'Kino Rodriguez',
      outcome: 'TKO1',
      fighterId: 1
    }, {
      date_of_fight: '1997-04-12',
      fighter: 'Robert Giepert',
      outcome: 'TKO1',
      fighterId: 1
    }, {
      date_of_fight: '1997-05-09',
      fighter: 'Tony Duran',
      outcome: 'TKO1',
      fighterId: 1
    }, {
      date_of_fight: '1997-06-14',
      fighter: 'Larry O\'Shields',
      outcome: 'W6',
      fighterId: 1
    }, {
      date_of_fight: '1997-07-12',
      fighter: 'Jesus Chavez',
      outcome: 'TKO5',
      fighterId: 1
    }, {
      date_of_fight: '1997-09-06',
      fighter: 'Luis Leija',
      outcome: 'KO2',
      fighterId: 1
    }, {
      date_of_fight: '1997-10-14',
      fighter: 'Felipe Garcia',
      outcome: 'KO6',
      fighterId: 1
    }, {
      date_of_fight: '1997-11-20',
      fighter: 'Angelo Nunez',
      outcome: 'TKO3',
      fighterId: 1
    }, {
      date_of_fight: '1998-01-09',
      fighter: 'Hector Arroyo',
      outcome: 'TKO5',
      fighterId: 1
    }, {
      date_of_fight: '1998-02-28',
      fighter: 'Same Girad',
      outcome: 'KO2',
      fighterId: 1
    }, {
      date_of_fight: '1998-03-23',
      fighter: 'Miguel Melo',
      outcome: 'TKO3',
      fighterId: 1
    }, {
      date_of_fight: '1998-04-18',
      fighter: 'Gustavo Cuello',
      outcome: 'W10',
      fighterId: 1
    }, {
      date_of_fight: '1998-06-14',
      fighter: 'Tony Pep',
      outcome: 'W4',
      fighterId: 1
    }, {
      date_of_fight: '1998-10-03',
      fighter: 'Genaro Hernandez',
      outcome: 'TKO8',
      fighterId: 1
    }, {
      date_of_fight: '1998-12-19',
      fighter: 'Angel Manfredy',
      outcome: 'TKO2',
      fighterId: 1
    }, {
      date_of_fight: '1999-09-11',
      fighter: 'Carlos Gerena',
      outcome: 'TKO7',
      fighterId: 1
    }, {
      date_of_fight: '1999-05-22',
      fighter: 'Justin Juuko',
      outcome: 'KO9',
      fighterId: 1
    }, {
      date_of_fight: '1999-02-17',
      fighter: 'Carlos Rios',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2000-03-18',
      fighter: 'Goyo Vargas',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2000-10-21',
      fighter: 'Emanuel Burton',
      outcome: 'TKO9',
      fighterId: 1
    }, {
      date_of_fight: '2001-01-20',
      fighter: 'Diego Corrales',
      outcome: 'TKO10',
      fighterId: 1
    }, {
      date_of_fight: '2001-05-26',
      fighter: 'Carlos Herandez',
      outcome: ' W12',
      fighterId: 1
    }, {
      date_of_fight: '2001-11-10',
      fighter: 'Jesus Chavez',
      outcome: 'TKO10',
      fighterId: 1
    }, {
      date_of_fight: '2002-04-20',
      fighter: 'Jose Luis Castillo',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2002-12-07',
      fighter: 'Jose Luis Castillo',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2003-04-19',
      fighter: 'Victoriano Sosa',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2003-11-01',
      fighter: 'Phillip N\'Dou',
      outcome: 'TKO7',
      fighterId: 1
    }, {
      date_of_fight: '2004-05-22',
      fighter: 'DeMarcus Corley',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2005-01-22',
      fighter: 'Henry Bruseles',
      outcome: 'TKO8',
      fighterId: 1
    }, {
      date_of_fight: '2005-06-25',
      fighter: 'Arturo Gatti',
      outcome: 'TKO6',
      fighterId: 1
    }, {
      date_of_fight: '2005-11-19',
      fighter: 'Sharmba Mitchell',
      outcome: 'TKO6',
      fighterId: 1
    }, {
      date_of_fight: '2006-04-08',
      fighter: 'Zab Judah',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2006-11-04',
      fighter: 'Carlos Baldomir',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2007-05-05',
      fighter: 'Oscar De La Hoya',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2007-12-08',
      fighter: 'Ricky Hatton',
      outcome: 'TKO10',
      fighterId: 1
    }, {
      date_of_fight: '2009-09-19',
      fighter: 'Juan Manuel Marquez',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2010-05-1',
      fighter: 'Shane Mosley',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2011-09-17',
      fighter: 'Victor Ortiz',
      outcome: 'KO4',
      fighterId: 1
    }, {
      date_of_fight: '2012-05-05',
      fighter: 'Miguel Cotto',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2013-05-04',
      fighter: 'Robert Guerrero',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2013-09-14',
      fighter: 'Canelo Alvarez',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2014-05-03',
      fighter: 'Marcos Maidana',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2014-09-13',
      fighter: 'Marcos Maidana',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2015-05-2',
      fighter: 'Manny Pacquiao',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2015-09-12',
      fighter: 'Andre Berto',
      outcome: 'W12',
      fighterId: 1
    }, {
      date_of_fight: '2017-08-26',
      fighter: 'Conon McGregor',
      outcome: 'TKO10',
      fighterId: 1
    }, {
      date_of_fight: '2008-03-08',
      fighter: 'Gary Morris',
      outcome: 'TKO',
      fighterId: 2
    }, {
      date_of_fight: '2008-05-03',
      fighter: 'Mo Taylor',
      outcome: 'TKO',
      fighterId: 2
    }, {
      date_of_fight: '2008-06-28',
      fighter: 'Artemji Sitenkov',
      outcome: 'L Submission (Kneebar)',
      fighterId: 2
    }, {
      date_of_fight: '2008-12-12',
      fighter: 'Stephen Bailey',
      outcome: 'TKO',
      fighterId: 2
    }, {
      date_of_fight: '2010-10-09',
      fighter: 'Connor Dillon',
      outcome: 'TKO',
      fighterId: 2
    }, {
      date_of_fight: '2010-11-27',
      fighter: 'Joe Duffy',
      outcome: 'L Submission (Arm Triangle)',
      fighterId: 2
    }, {
      date_of_fight: '2011-02-12',
      fighter: 'Hugh Brady',
      outcome: 'KO',
      fighterId: 2
    }, {
      date_of_fight: '2011-03-12',
      fighter: 'Mike Wood',
      outcome: 'KO',
      fighterId: 2
    }, {
      date_of_fight: '2011-04-16',
      fighter: 'Paddy Doherty',
      outcome: 'KO',
      fighterId: 2
    }, {
      date_of_fight: '2011-06-11',
      fighter: 'Artur Sowinski',
      outcome: 'KO',
      fighterId: 2
    }, {
      date_of_fight: '2011-09-08',
      fighter: 'Aaron Jahnsen',
      outcome: 'KO',
      fighterId: 2
    }, {
      date_of_fight: '2012-02-18',
      fighter: 'Steve O\'Keefe',
      outcome: 'KO',
      fighterId: 2
    }, {
      date_of_fight: '2012-06-02',
      fighter: 'Dave Hill',
      outcome: 'Submission (Rear Naked Choke)',
      fighterId: 2
    }, {
      date_of_fight: '2012-12-31',
      fighter: 'Ivan Buchinger',
      outcome: 'KO',
      fighterId: 2
    }, {
      date_of_fight: '2013-04-06',
      fighter: 'Marcus Brimage',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2013-08-17',
      fighter: 'Max Holloway',
      outcome: 'Decision - Unanimous',
      fighterId: 2
    }, {
      date_of_fight: '2014-07-19',
      fighter: 'Diego Brandao',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2014-09-27',
      fighter: 'Dustin Poirier',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2015-01-18',
      fighter: 'Dennis Siver',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2015-07-11',
      fighter: 'Chad Mendes',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2015-12-12',
      fighter: 'Jose Aldo',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2016-03-05',
      fighter: 'Nate Diaz',
      outcome: 'L Submission',
      fighterId: 2
    }, {
      date_of_fight: '2016-08-20',
      fighter: 'Nate Diaz',
      outcome: 'Decision - Majority',
      fighterId: 2
    }, {
      date_of_fight: '2016-11-12',
      fighter: 'Eddie Alvarez',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2018-10-06',
      fighter: 'Khabib Nurmagonmedov',
      outcome: 'L Submission',
      fighterId: 2
    }, {
      date_of_fight: '2020-01-18',
      fighter: 'Donald Cerrone',
      outcome: 'KO/TKO',
      fighterId: 2
    }, {
      date_of_fight: '2021-01-23',
      fighter: 'Dustin Poirier',
      outcome: 'L KO/TKO',
      fighterId: 2
    }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('matches')

    return queryInterface.bulkInsert('fights')
  }
}
