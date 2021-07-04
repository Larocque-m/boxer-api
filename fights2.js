const fights = [{
  fighterId: 1,
  name: 'Floyd Mayweather',
  record: '50-0',
  nationality: 'American',
  website: 'https://floydmayweather.com/',
  matches: [{
    fightId: 1,
    date_of_fight: '1996-10-11',
    fighter: 'Roberto Apodaca',
    outcome: 'KO2',
  }, {
    fightId: 2,
    date_of_fight: '1996-11-30',
    fighter: 'Reggie Sanders',
    outcome: 'W4',
  }, { 
    fightid: 3,
    date_of_fight: '1997-01-18',
    fighter: 'Jerry Cooper',
    outcome: 'TKO',
  }, {
    fightid: 4,
    date_of_fight: '1997-02-01',
    fighter: 'Edgar Ayala',
    outcome: 'KO2',
}, {
    fightid: 5,
    date_of_fight: '1997-03-12',
    fighter: 'Kino Rodriguez',
    outcome: 'TKO1',
}, {
    fightid: 6,
    date_of_fight: '1997-04-12',
    fighter: 'Robert Giepert',
    outcome: 'TKO1',
}, {
    fightid: 7,
    date_of_fight: '1997-05-09',
    fighter: 'Tony Duran',
    outcome: 'TKO1',
}, {
    fightid: 8,
    date_of_fight: '1997-06-14',
    fighter: 'Larry O\'Shields',
    outcome: 'W6',
}, {
    fightid: 9,
    date_of_fight: '1997-07-12',
    fighter: 'Jesus Chavez',
    outcome: 'TKO5',
}, {
    fightid: 10,
    date_of_fight: '1997-09-06',
    fighter: 'Luis Leija',
    outcome: 'KO2',
}, {
    fightid: 11,
    date_of_fight: '1997-10-14',
    fighter: 'Felipe Garcia',
    outcome: 'KO6',
}, {
    fightid: 12,
    date_of_fight: '1997-11-20',
    fighter: 'Angelo Nunez',
    outcome: 'TKO3',
}, {
    fightid: 13,
    date_of_fight: '1998-01-09',
    fighter: 'Hector Arroyo',
    outcome: 'TKO5',
}, {
    fightid: 14,
    date_of_fight: '1998-02-28',
    fighter: 'Same Girad',
    outcome: 'KO2',
}, {
    fightid: 15,
    date_of_fight: '1998-03-23',
    fighter: 'Miguel Melo',
    outcome: 'TKO3',
}, {
    fightid: 16,
    date_of_fight: '1998-04-18',
    fighter: 'Gustavo Cuello',
    outcome: 'W10',
}, {
    fightid: 17,
    date_of_fight: '1998-06-14',
    fighter: 'Tony Pep',
    outcome: 'W4',
}, {
    fightid: 18,
    date_of_fight: '1998-10-03',
    fighter: 'Genaro Hernandez',
    outcome: 'TKO8',
}, {
    fightid: 19,
    date_of_fight: '1998-12-19',
    fighter: 'Angel Manfredy',
    outcome: 'TKO2',
}, {
    fightid: 20,
    date_of_fight: '1999-09-11',
    fighter: 'Carlos Gerena',
    outcome: 'TKO7',
}, {
    fightid: 21,
    date_of_fight: '1999-05-22',
    fighter: 'Justin Juuko',
    outcome: 'KO9',
}, {
    fightid: 22,
    date_of_fight: '1999-02-17',
    fighter: 'Carlos Rios',
    outcome: 'W12',
}, {
    fightid: 23,
    date_of_fight: '2000-03-18',
    fighter: 'Goyo Vargas',
    outcome: 'W12',
}, {
    fightid: 24,
    date_of_fight: '2000-10-21',
    fighter: 'Emanuel Burton',
    outcome: 'TKO9',
}, {
    fightid: 25,
    date_of_fight: '2001-01-20',
    fighter: 'Diego Corrales',
    outcome: 'TKO10',
}, {
    fightid: 26,
    date_of_fight: '2001-05-26',
    fighter: 'Carlos Herandez',
    outcome: ' W12',
}, {
    fightid: 27,
    date_of_fight: '2001-11-10',
    fighter: 'Jesus Chavez',
    outcome: 'TKO10',
}, {
    fightid: 28,
    date_of_fight: '2002-04-20',
    fighter: 'Jose Luis Castillo',
    outcome: 'W12',
}, {
    fightid: 29,
    date_of_fight: '2002-12-07',
    fighter: 'Jose Luis Castillo',
    outcome: 'W12',
}, {
    fightid: 30,
    date_of_fight: '2003-04-19',
    fighter: 'Victoriano Sosa',
    outcome: 'W12',
}, {
    fightid: 31,
    date_of_fight: '2003-11-01',
    fighter: 'Phillip N\'Dou',
    outcome: 'TKO7',
}, {
    fightid: 32,
    date_of_fight: '2004-05-22',
    fighter: 'DeMarcus Corley',
    outcome: 'W12',
}, {
    fightid: 33,
    date_of_fight: '2005-01-22',
    fighter: 'Henry Bruseles',
    outcome: 'TKO8',
}, {
    fightid: 34,
    date_of_fight: '2005-06-25',
    fighter: 'Arturo Gatti',
    outcome: 'TKO6',
}, {
    fightid: 35,
    date_of_fight: '2005-11-19',
    fighter: 'Sharmba Mitchell',
    outcome: 'TKO6',
}, {
    fightid: 36,
    date_of_fight: '2006-04-08',
    fighter: 'Zab Judah',
    outcome: 'W12',
}, {
    fightid: 37,
    date_of_fight: '2006-11-04',
    fighter: 'Carlos Baldomir',
    outcome: 'W12',
}, {
    fightid: 38,
    date_of_fight: '2007-05-05',
    fighter: 'Oscar De La Hoya',
    outcome: 'W12',
}, {
    fightid: 39,
    date_of_fight: '2007-12-08',
    fighter: 'Ricky Hatton',
    outcome: 'TKO10',
}, {
    fightid: 40,
    date_of_fight: '2009-09-19',
    fighter: 'Juan Manuel Marquez',
    outcome: 'W12',
}, {
    fightid: 41,
    date_of_fight: '2010-05-1',
    fighter: 'Shane Mosley',
    outcome: 'W12',
}, {
    fightid: 42,
    date_of_fight: '2011-09-17',
    fighter: 'Victor Ortiz',
    outcome: 'KO4',
}, {
    fightid: 43,
    date_of_fight: '2012-05-05',
    fighter: 'Miguel Cotto',
    outcome: 'W12',
}, {
    fightid: 44,
    date_of_fight: '2013-05-04',
    fighter: 'Robert Guerrero',
    outcome: 'W12',
}, {
    fightid: 45,
    date_of_fight: '2013-09-14',
    fighter: 'Canelo Alvarez',
    outcome: 'W12',
}, {
    fightid: 46,
    date_of_fight: '2014-05-03',
    fighter: 'Marcos Maidana',
    outcome: 'W12',
}, {
    fightid: 47,
    date_of_fight: '2014-09-13',
    fighter: 'Marcos Maidana',
    outcome: 'W12',
}, {
    fightid: 48,
    date_of_fight: '2015-05-2',
    fighter: 'Manny Pacquiao',
    outcome: 'W12',
}, {
    fightid: 49,
    date_of_fight: '2015-09-12',
    fighter: 'Andre Berto',
    outcome: 'W12',
}, {
    fightid: 50,
    date_of_fight: '2017-08-26',
    fighter: 'Conon McGregor',
    outcome: 'TKO10',
}]
}, {
  fighterId: 2,
  name: 'Conor McGregor',
  record: '22-5',
  nationality: 'Irish',
  website: 'https://conormcgregor.com/',
  matches: [{
    fightid: 1,
    date_of_fight: '2008-03-08',
    fighter: 'Gary Morris',
    outcome: 'TKO',
  }, {
    fightid: 2,
    date_of_fight: '2008-05-03',
    fighter: 'Mo Taylor',
    outcome: 'TKO',
  }, {
    fightid: 3,
    date_of_fight: '2008-06-28',
    fighter: 'Artemji Sitenkov',
    outcome: 'L Submission (Kneebar)',
  }, {
    fightid: 4,
    date_of_fight: '2008-12-12',
    fighter: 'Stephen Bailey',
    outcome: 'TKO',
  }, {
    fightid: 5,
    date_of_fight: '2010-10-09',
    fighter: 'Connor Dillon',
    outcome: 'TKO',
  }, {
    fightid: 6,
    date_of_fight: '2010-11-27',
    fighter: 'Joe Duffy',
    outcome: 'L Submission (Arm Triangle)',
  }, {
    fightid: 7,
    date_of_fight: '2011-02-12',
    fighter: 'Hugh Brady',
    outcome: 'KO',
  }, {
    fightid: 8,
    date_of_fight: '2011-03-12',
    fighter: 'Mike Wood',
    outcome: 'KO',
  }, {
    fightid: 9,
    date_of_fight: '2011-04-16',
    fighter: 'Paddy Doherty',
    outcome: 'KO',
  }, {
    fightid: 10,
    date_of_fight: '2011-06-11',
    fighter: 'Artur Sowinski',
    outcome: 'KO',
  }, {
    fightid: 11,
    date_of_fight: '2011-09-08',
    fighter: 'Aaron Jahnsen',
    outcome: 'KO',
  }, {
    fightid: 12,
    date_of_fight: '2012-02-18',
    fighter: 'Steve O\'Keefe',
    outcome: 'KO',
  }, {
    fightid: 13,
    date_of_fight: '2012-06-02',
    fighter: 'Dave Hill',
    outcome: 'Submission (Rear Naked Choke)',
  }, {
    fightid: 14,
    date_of_fight: '2012-12-31',
    fighter: 'Ivan Buchinger',
    outcome: 'KO',
  }, {
    fightid: 15,
    date_of_fight: '2013-04-06',
    fighter: 'Marcus Brimage',
    outcome: 'KO/TKO',
  }, {
    fightid: 16,
    date_of_fight: '2013-08-17',
    fighter: 'Max Holloway',
    outcome: 'Decision - Unanimous',
  }, {
    fightid: 17,
    date_of_fight: '2014-07-19',
    fighter: 'Diego Brandao',
    outcome: 'KO/TKO',
  }, {
    fightid: 18,
    date_of_fight: '2014-09-27',
    fighter: 'Dustin Poirier',
    outcome: 'KO/TKO',
  }, {
    fightid: 19,
    date_of_fight: '2015-01-18',
    fighter: 'Dennis Siver',
    outcome: 'KO/TKO',
  }, {
    fightid: 20,
    date_of_fight: '2015-07-11',
    fighter: 'Chad Mendes',
    outcome: 'KO/TKO',
  }, {
    fightid: 21,
    date_of_fight: '2015-12-12',
    fighter: 'Jose Aldo',
    outcome: 'KO/TKO',
  }, {
    fightid: 22,
    date_of_fight: '2016-03-05',
    fighter: 'Nate Diaz',
    outcome: 'L Submission',
  }, {
    fightid: 23,
    date_of_fight: '2016-08-20',
    fighter: 'Nate Diaz',
    outcome: 'Decision - Majority',
  }, {
    fightid: 24,
    date_of_fight: '2016-11-12',
    fighter: 'Eddie Alvarez',
    outcome: 'KO/TKO',
  }, {
    fightid: 25,
    date_of_fight: '2018-10-06',
    fighter: 'Khabib Nurmagonmedov',
    outcome: 'L Submission',
  }, {
    fightid: 26,
    date_of_fight: '2020-01-18',
    fighter: 'Donald Cerrone',
    outcome: 'KO/TKO',
  }, {
    fightid: 27,
    date_of_fight: '2021-01-23',
    fighter: 'Dustin Poirier',
    outcome: 'L KO/TKO',
  }]
}]

module.exports = fights
