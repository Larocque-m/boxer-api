const fights = [{
  id: 1,
  date: 'Oct. 11 1996',
  fighter: 'Roberto Apodaca',
  outcome: 'KO2'
}, {
  id: 2,
  date: 'Nov. 30 1996',
  fighter: 'Reggie Sanders',
  outcome: 'W4'
}, {
  id: 3,
  date: 'Jan. 18 1997',
  fighter: 'Jerry Cooper',
  outcome: 'TKO'
}, {
  id: 4,
  date: 'Feb. 1 1997',
  fighter: 'Edgar Ayala',
  outcome: 'KO2'
}, {
  id: 5,
  date: 'Mar. 12 1997',
  fighter: 'Kino Rodriguez',
  outcome: 'TKO1'
}, {
  id: 6,
  date: 'Apr. 12 1997',
  fighter: 'Robert Giepert',
  outcome: 'TKO1'
}, {
  id: 7,
  date: 'May 9 1997',
  fighter: 'Tony Duran',
  outcome: 'TKO1'
}, {
  id: 8,
  date: 'June 14 1997',
  fighter: 'Larry O\'Shields',
  outcome: 'W6'
}, {
  id: 9,
  date: 'July 12 1997',
  fighter: 'Jesus Chavez',
  outcome: 'TKO5'
}, {
  id: 10,
  date: 'Sept. 6 1997',
  fighter: 'Luis Leija',
  outcome: 'KO2'
}, {
  id: 11,
  date: 'Oct. 14 1997',
  fighter: 'Felipe Garcia',
  outcome: 'KO6'
}, {
  id: 12,
  date: 'Nov. 20 1997',
  fighter: 'Angelo Nunez',
  outcome: 'TKO3'
}, {
  id: 13,
  date: 'Jan. 9 1998',
  fighter: 'Hector Arroyo',
  outcome: 'TKO5'
}, {
  id: 14,
  date: 'Feb. 28 1998',
  fighter: 'Same Girad',
  outcome: 'KO2'
}, {
  id: 15,
  date: 'March 23 1998',
  fighter: 'Miguel Melo',
  outcome: 'TKO3'
}, {
  id: 16,
  date: 'April 18 1998',
  fighter: 'Gustavo Cuello',
  outcome: 'W10'
}, {
  id: 17,
  date: 'June 14 1998',
  fighter: 'Tony Pep',
  outcome: 'W4'
}, {
  id: 18,
  date: 'Oct. 3 1998',
  fighter: 'Genaro Hernandez',
  outcome: 'TKO8'
}, {
  id: 19,
  date: 'Dec. 19 1998',
  fighter: 'Angel Manfredy',
  outcome: 'TKO2'
}, {
  id: 20,
  date: 'Sept. 11 1999',
  fighter: 'Carlos Gerena',
  outcome: 'TKO7'
}, {
  id: 21,
  date: 'May 22 1999',
  fighter: 'Justin Juuko',
  outcome: 'KO9'
}, {
  id: 22,
  date: 'Feb. 17 1999',
  fighter: 'Carlos Rios',
  outcome: 'W12'
}, {
  id: 23,
  date: 'March 18 2000',
  fighter: 'Goyo Vargas',
  outcome: 'W12'
}, {
  id: 24,
  date: 'Oct. 21 2000',
  fighter: 'Emanuel Burton',
  outcome: 'TKO9'
}, {
  id: 25,
  date: 'Jan. 20 2001',
  fighter: 'Diego Corrales',
  outcome: 'TKO10'
}, {
  id: 26,
  date: 'May 26 2001',
  fighter: 'Carlos Herandez',
  outcome: ' W12'
}, {
  id: 27,
  date: 'Nov. 10 2001',
  fighter: 'Jesus Chavez',
  outcome: 'TKO10'
}, {
  id: 28,
  date: 'Apr. 20 2002',
  fighter: 'Jose Luis Castillo',
  outcome: 'W12'
}, {
  id: 29,
  date: 'Dec. 7 2002',
  fighter: 'Jose Luis Castillo',
  outcome: 'W12'
}, {
  id: 30,
  date: 'Apr. 19 2003',
  fighter: 'Victoriano Sosa',
  outcome: 'W12'
}, {
  id: 31,
  date: 'Nov. 1 2003',
  fighter: 'Phillip N\'Dou',
  outcome: 'TKO7'
}, {
  id: 32,
  date: 'May 22 2004',
  fighter: 'DeMarcus Corley',
  outcome: 'W12'
}, {
  id: 33,
  date: 'Jan. 22 2005',
  fighter: 'Henry Bruseles',
  outcome: 'TKO8'
}, {
  id: 34,
  date: 'June 25 2005',
  fighter: 'Arturo Gatti',
  outcome: 'TKO6'
}, {
  id: 35,
  date: 'Nov. 19 2005',
  fighter: 'Sharmba Mitchell',
  outcome: 'TKO6'
}, {
  id: 36,
  date: 'Apr. 8 2006',
  fighter: 'Zab Judah',
  outcome: 'W12'
}, {
  id: 37,
  date: 'Nov. 4 2006',
  fighter: 'Carlos Baldomir',
  outcome: 'W12'
}, {
  id: 38,
  date: 'May 5 2007',
  fighter: 'Oscar De La Hoya',
  outcome: 'W12'
}, {
  id: 39,
  date: 'Dec. 8 2007',
  fighter: 'Ricky Hatton',
  outcome: 'TKO10'
}, {
  id: 40,
  date: 'Sept. 19 2009',
  fighter: 'Juan Manuel Marquez',
  outcome: 'W12'
}, {
  id: 41,
  date: 'May 1 2010',
  fighter: 'Shane Mosley',
  outcome: 'W12'
}, {
  id: 42,
  date: 'Sept. 17 2011',
  fighter: 'Victor Ortiz',
  outcome: 'KO4'
}, {
  id: 43,
  date: 'May 5 2012',
  fighter: 'Miguel Cotto',
  outcome: 'W12'
}, {
  id: 44,
  date: 'May 4 2013',
  fighter: 'Robert Guerrero',
  outcome: 'W12'
}, {
  id: 45,
  date: 'Sept. 14 2013',
  fighter: 'Canelo Alvarez',
  outcome: 'W12'
}, {
  id: 46,
  date: 'May 3 2014',
  fighter: 'Marcos Maidana',
  outcome: 'W12'
}, {
  id: 47,
  date: 'Sept. 13 2014',
  fighter: 'Marcos Maidana',
  outcome: 'W12'
}, {
  id: 48,
  date: 'May 2 2015',
  fighter: 'Manny Pacquiao',
  outcome: 'W12'
}, {
  id: 49,
  date: 'Sept. 12 2015',
  fighter: 'Andre Berto',
  outcome: 'W12'
}, {
  id: 50,
  date: 'Aug. 26 2017',
  fighter: 'Conon McGregor',
  outcome: 'TKO10'
}]

module.exports = fights
