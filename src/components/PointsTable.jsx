import { useEffect, useState } from "react";


function PointsTable() {

    let PointsTableData = {
        "pointsTable": [
          {
            "groupName": "Teams",
            "pointsTableInfo": [
              {
                "teamId": 63,
                "teamName": "KKR",
                "matchesPlayed": 11,
                "matchesWon": 8,
                "matchesLost": 3,
                "points": 16,
                "nrr": "+1.453",
                "teamFullName": "Kolkata Knight Riders",
                "teamMatches": [
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1711202400000",
                    "result": "Won by 4 runs",
                    "opponentSName": "SRH",
                    "matchId": 89665,
                    "matchName": "3rd Match",
                    "winner": 63,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1711720800000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "RCB",
                    "matchId": 89703,
                    "matchName": "10th Match",
                    "winner": 63,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1712152800000",
                    "result": "Won by 106 runs",
                    "opponentSName": "DC",
                    "matchId": 89745,
                    "matchName": "16th Match",
                    "winner": 63,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1712584800000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "CSK",
                    "matchId": 91380,
                    "matchName": "22nd Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1713088800000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "LSG",
                    "matchId": 91420,
                    "matchName": "28th Match",
                    "winner": 63,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1713276000000",
                    "result": "Loss by 2 wkts",
                    "opponentSName": "RR",
                    "matchId": 91443,
                    "matchName": "31st Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1713693600000",
                    "result": "Won by 1 run",
                    "opponentSName": "RCB",
                    "matchId": 91479,
                    "matchName": "36th Match",
                    "winner": 63,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1714140000000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 91528,
                    "matchName": "42nd Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1714399200000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "DC",
                    "matchId": 91564,
                    "matchName": "47th Match",
                    "winner": 63,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1714744800000",
                    "result": "Won by 24 runs",
                    "opponentSName": "MI",
                    "matchId": 91596,
                    "matchName": "51st Match",
                    "winner": 63,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1714917600000",
                    "result": "Won by 98 runs",
                    "opponentSName": "LSG",
                    "matchId": 91618,
                    "matchName": "54th Match",
                    "winner": 63,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1715436000000",
                    "opponentSName": "MI",
                    "matchId": 91654,
                    "matchName": "60th Match",
                    "winner": 1,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1715608800000",
                    "opponentSName": "GT",
                    "matchId": 91677,
                    "matchName": "63rd Match",
                    "winner": 1,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1716127200000",
                    "opponentSName": "RR",
                    "matchId": 91717,
                    "matchName": "70th Match",
                    "winner": 1,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  }
                ],
                "form": [
                  "W",
                  "L",
                  "W",
                  "W",
                  "W"
                ],
                "teamImageId": 225646
              },
              {
                "teamId": 64,
                "teamName": "RR",
                "matchesPlayed": 11,
                "matchesWon": 8,
                "matchesLost": 3,
                "points": 16,
                "nrr": "+0.476",
                "teamFullName": "Rajasthan Royals",
                "teamMatches": [
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1711274400000",
                    "result": "Won by 20 runs",
                    "opponentSName": "LSG",
                    "matchId": 89668,
                    "matchName": "4th Match",
                    "winner": 64,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1711634400000",
                    "result": "Won by 12 runs",
                    "opponentSName": "DC",
                    "matchId": 89700,
                    "matchName": "9th Match",
                    "winner": 64,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1711980000000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "MI",
                    "matchId": 89731,
                    "matchName": "14th Match",
                    "winner": 64,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1712412000000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "RCB",
                    "matchId": 89756,
                    "matchName": "19th Match",
                    "winner": 64,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1712757600000",
                    "result": "Loss by 3 wkts",
                    "opponentSName": "GT",
                    "matchId": 91393,
                    "matchName": "24th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1713016800000",
                    "result": "Won by 3 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 91416,
                    "matchName": "27th Match",
                    "winner": 64,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1713276000000",
                    "result": "Won by 2 wkts",
                    "opponentSName": "KKR",
                    "matchId": 91443,
                    "matchName": "31st Match",
                    "winner": 64,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1713794400000",
                    "result": "Won by 9 wkts",
                    "opponentSName": "MI",
                    "matchId": 91497,
                    "matchName": "38th Match",
                    "winner": 64,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1714226400000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "LSG",
                    "matchId": 91542,
                    "matchName": "44th Match",
                    "winner": 64,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1714658400000",
                    "result": "Loss by 1 run",
                    "opponentSName": "SRH",
                    "matchId": 91587,
                    "matchName": "50th Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1715090400000",
                    "result": "Loss by 20 runs",
                    "opponentSName": "DC",
                    "matchId": 91632,
                    "matchName": "56th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1715508000000",
                    "opponentSName": "CSK",
                    "matchId": 91663,
                    "matchName": "61st Match",
                    "winner": 1,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1715781600000",
                    "opponentSName": "PBKS",
                    "matchId": 91686,
                    "matchName": "65th Match",
                    "winner": 1,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1716127200000",
                    "opponentSName": "KKR",
                    "matchId": 91717,
                    "matchName": "70th Match",
                    "winner": 1,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  }
                ],
                "form": [
                  "W",
                  "W",
                  "W",
                  "L",
                  "L"
                ],
                "teamImageId": 225647
              },
              {
                "teamId": 255,
                "teamName": "SRH",
                "matchesPlayed": 12,
                "matchesWon": 7,
                "matchesLost": 5,
                "points": 14,
                "nrr": "+0.406",
                "teamFullName": "Sunrisers Hyderabad",
                "teamMatches": [
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1711202400000",
                    "result": "Loss by 4 runs",
                    "opponentSName": "KKR",
                    "matchId": 89665,
                    "matchName": "3rd Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1711548000000",
                    "result": "Won by 31 runs",
                    "opponentSName": "MI",
                    "matchId": 89693,
                    "matchName": "8th Match",
                    "winner": 255,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1711879200000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "GT",
                    "matchId": 89717,
                    "matchName": "12th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1712325600000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "CSK",
                    "matchId": 89752,
                    "matchName": "18th Match",
                    "winner": 255,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1712671200000",
                    "result": "Won by 2 runs",
                    "opponentSName": "PBKS",
                    "matchId": 91389,
                    "matchName": "23rd Match",
                    "winner": 255,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1713189600000",
                    "result": "Won by 25 runs",
                    "opponentSName": "RCB",
                    "matchId": 91434,
                    "matchName": "30th Match",
                    "winner": 255,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1713621600000",
                    "result": "Won by 67 runs",
                    "opponentSName": "DC",
                    "matchId": 91474,
                    "matchName": "35th Match",
                    "winner": 255,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1714053600000",
                    "result": "Loss by 35 runs",
                    "opponentSName": "RCB",
                    "matchId": 91524,
                    "matchName": "41st Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1714312800000",
                    "result": "Loss by 78 runs",
                    "opponentSName": "CSK",
                    "matchId": 91555,
                    "matchName": "46th Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1714658400000",
                    "result": "Won by 1 run",
                    "opponentSName": "RR",
                    "matchId": 91587,
                    "matchName": "50th Match",
                    "winner": 255,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1715004000000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "MI",
                    "matchId": 91623,
                    "matchName": "55th Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1715176800000",
                    "result": "Won by 10 wkts",
                    "opponentSName": "LSG",
                    "matchId": 91641,
                    "matchName": "57th Match",
                    "winner": 255,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1715868000000",
                    "opponentSName": "GT",
                    "matchId": 91690,
                    "matchName": "66th Match",
                    "winner": 1,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1716112800000",
                    "opponentSName": "PBKS",
                    "matchId": 91713,
                    "matchName": "69th Match",
                    "winner": 1,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  }
                ],
                "form": [
                  "L",
                  "L",
                  "W",
                  "L",
                  "W"
                ],
                "teamImageId": 225649
              },
              {
                "teamId": 58,
                "teamName": "CSK",
                "matchesPlayed": 12,
                "matchesWon": 6,
                "matchesLost": 6,
                "points": 12,
                "nrr": "+0.491",
                "teamFullName": "Chennai Super Kings",
                "teamMatches": [
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1711117800000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "RCB",
                    "matchId": 89654,
                    "matchName": "1st Match",
                    "winner": 58,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1711461600000",
                    "result": "Won by 63 runs",
                    "opponentSName": "GT",
                    "matchId": 89689,
                    "matchName": "7th Match",
                    "winner": 58,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1711893600000",
                    "result": "Loss by 20 runs",
                    "opponentSName": "DC",
                    "matchId": 89724,
                    "matchName": "13th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1712325600000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "SRH",
                    "matchId": 89752,
                    "matchName": "18th Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1712584800000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "KKR",
                    "matchId": 91380,
                    "matchName": "22nd Match",
                    "winner": 58,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1713103200000",
                    "result": "Won by 20 runs",
                    "opponentSName": "MI",
                    "matchId": 91425,
                    "matchName": "29th Match",
                    "winner": 58,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1713535200000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "LSG",
                    "matchId": 91470,
                    "matchName": "34th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1713880800000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "LSG",
                    "matchId": 91506,
                    "matchName": "39th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1714312800000",
                    "result": "Won by 78 runs",
                    "opponentSName": "SRH",
                    "matchId": 91555,
                    "matchName": "46th Match",
                    "winner": 58,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1714572000000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 91578,
                    "matchName": "49th Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1714903200000",
                    "result": "Won by 28 runs",
                    "opponentSName": "PBKS",
                    "matchId": 91609,
                    "matchName": "53rd Match",
                    "winner": 58,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1715349600000",
                    "result": "Loss by 35 runs",
                    "opponentSName": "GT",
                    "matchId": 91650,
                    "matchName": "59th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1715508000000",
                    "opponentSName": "RR",
                    "matchId": 91663,
                    "matchName": "61st Match",
                    "winner": 1,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1716040800000",
                    "opponentSName": "RCB",
                    "matchId": 91704,
                    "matchName": "68th Match",
                    "winner": 1,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  }
                ],
                "form": [
                  "L",
                  "W",
                  "L",
                  "W",
                  "L"
                ],
                "teamImageId": 225641
              },
              {
                "teamId": 61,
                "teamName": "DC",
                "matchesPlayed": 12,
                "matchesWon": 6,
                "matchesLost": 6,
                "points": 12,
                "nrr": "-0.316",
                "teamFullName": "Delhi Capitals",
                "teamMatches": [
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1711188000000",
                    "result": "Loss by 4 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 89661,
                    "matchName": "2nd Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1711634400000",
                    "result": "Loss by 12 runs",
                    "opponentSName": "RR",
                    "matchId": 89700,
                    "matchName": "9th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1711893600000",
                    "result": "Won by 20 runs",
                    "opponentSName": "CSK",
                    "matchId": 89724,
                    "matchName": "13th Match",
                    "winner": 61,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1712152800000",
                    "result": "Loss by 106 runs",
                    "opponentSName": "KKR",
                    "matchId": 89745,
                    "matchName": "16th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1712484000000",
                    "result": "Loss by 29 runs",
                    "opponentSName": "MI",
                    "matchId": 89763,
                    "matchName": "20th Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1712930400000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "LSG",
                    "matchId": 91407,
                    "matchName": "26th Match",
                    "winner": 61,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1713362400000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "GT",
                    "matchId": 91452,
                    "matchName": "32nd Match",
                    "winner": 61,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1713621600000",
                    "result": "Loss by 67 runs",
                    "opponentSName": "SRH",
                    "matchId": 91474,
                    "matchName": "35th Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1713967200000",
                    "result": "Won by 4 runs",
                    "opponentSName": "GT",
                    "matchId": 91515,
                    "matchName": "40th Match",
                    "winner": 61,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1714212000000",
                    "result": "Won by 10 runs",
                    "opponentSName": "MI",
                    "matchId": 91533,
                    "matchName": "43rd Match",
                    "winner": 61,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1714399200000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "KKR",
                    "matchId": 91564,
                    "matchName": "47th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1715090400000",
                    "result": "Won by 20 runs",
                    "opponentSName": "RR",
                    "matchId": 91632,
                    "matchName": "56th Match",
                    "winner": 61,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1715522400000",
                    "opponentSName": "RCB",
                    "matchId": 91668,
                    "matchName": "62nd Match",
                    "winner": 1,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1715695200000",
                    "opponentSName": "LSG",
                    "matchId": 91681,
                    "matchName": "64th Match",
                    "winner": 1,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  }
                ],
                "form": [
                  "L",
                  "W",
                  "W",
                  "L",
                  "W"
                ],
                "teamImageId": 225644
              },
              {
                "teamId": 966,
                "teamName": "LSG",
                "matchesPlayed": 12,
                "matchesWon": 6,
                "matchesLost": 6,
                "points": 12,
                "nrr": "-0.769",
                "teamFullName": "Lucknow Super Giants",
                "teamMatches": [
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1711274400000",
                    "result": "Loss by 20 runs",
                    "opponentSName": "RR",
                    "matchId": 89668,
                    "matchName": "4th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1711807200000",
                    "result": "Won by 21 runs",
                    "opponentSName": "PBKS",
                    "matchId": 89710,
                    "matchName": "11th Match",
                    "winner": 966,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1712066400000",
                    "result": "Won by 28 runs",
                    "opponentSName": "RCB",
                    "matchId": 89738,
                    "matchName": "15th Match",
                    "winner": 966,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1712498400000",
                    "result": "Won by 33 runs",
                    "opponentSName": "GT",
                    "matchId": 89770,
                    "matchName": "21st Match",
                    "winner": 966,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1712930400000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "DC",
                    "matchId": 91407,
                    "matchName": "26th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1713088800000",
                    "result": "Loss by 8 wkts",
                    "opponentSName": "KKR",
                    "matchId": 91420,
                    "matchName": "28th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1713535200000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "CSK",
                    "matchId": 91470,
                    "matchName": "34th Match",
                    "winner": 966,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1713880800000",
                    "result": "Won by 6 wkts",
                    "opponentSName": "CSK",
                    "matchId": 91506,
                    "matchName": "39th Match",
                    "winner": 966,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1714226400000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "RR",
                    "matchId": 91542,
                    "matchName": "44th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1714485600000",
                    "result": "Won by 4 wkts",
                    "opponentSName": "MI",
                    "matchId": 91569,
                    "matchName": "48th Match",
                    "winner": 966,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1714917600000",
                    "result": "Loss by 98 runs",
                    "opponentSName": "KKR",
                    "matchId": 91618,
                    "matchName": "54th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1715176800000",
                    "result": "Loss by 10 wkts",
                    "opponentSName": "SRH",
                    "matchId": 91641,
                    "matchName": "57th Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1715695200000",
                    "opponentSName": "DC",
                    "matchId": 91681,
                    "matchName": "64th Match",
                    "winner": 1,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1715954400000",
                    "opponentSName": "MI",
                    "matchId": 91699,
                    "matchName": "67th Match",
                    "winner": 1,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  }
                ],
                "form": [
                  "W",
                  "L",
                  "W",
                  "L",
                  "L"
                ],
                "teamImageId": 389444
              },
              {
                "teamId": 59,
                "teamName": "RCB",
                "matchesPlayed": 12,
                "matchesWon": 5,
                "matchesLost": 7,
                "points": 10,
                "nrr": "+0.217",
                "teamFullName": "Royal Challengers Bengaluru",
                "teamMatches": [
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1711117800000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "CSK",
                    "matchId": 89654,
                    "matchName": "1st Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1711375200000",
                    "result": "Won by 4 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 89682,
                    "matchName": "6th Match",
                    "winner": 59,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1711720800000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "KKR",
                    "matchId": 89703,
                    "matchName": "10th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1712066400000",
                    "result": "Loss by 28 runs",
                    "opponentSName": "LSG",
                    "matchId": 89738,
                    "matchName": "15th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1712412000000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "RR",
                    "matchId": 89756,
                    "matchName": "19th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1712844000000",
                    "result": "Loss by 7 wkts",
                    "opponentSName": "MI",
                    "matchId": 91398,
                    "matchName": "25th Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1713189600000",
                    "result": "Loss by 25 runs",
                    "opponentSName": "SRH",
                    "matchId": 91434,
                    "matchName": "30th Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1713693600000",
                    "result": "Loss by 1 run",
                    "opponentSName": "KKR",
                    "matchId": 91479,
                    "matchName": "36th Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1714053600000",
                    "result": "Won by 35 runs",
                    "opponentSName": "SRH",
                    "matchId": 91524,
                    "matchName": "41st Match",
                    "winner": 59,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1714298400000",
                    "result": "Won by 9 wkts",
                    "opponentSName": "GT",
                    "matchId": 91551,
                    "matchName": "45th Match",
                    "winner": 59,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1714831200000",
                    "result": "Won by 4 wkts",
                    "opponentSName": "GT",
                    "matchId": 91600,
                    "matchName": "52nd Match",
                    "winner": 59,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1715263200000",
                    "result": "Won by 60 runs",
                    "opponentSName": "PBKS",
                    "matchId": 91645,
                    "matchName": "58th Match",
                    "winner": 59,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1715522400000",
                    "opponentSName": "DC",
                    "matchId": 91668,
                    "matchName": "62nd Match",
                    "winner": 1,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1716040800000",
                    "opponentSName": "CSK",
                    "matchId": 91704,
                    "matchName": "68th Match",
                    "winner": 1,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  }
                ],
                "form": [
                  "L",
                  "W",
                  "W",
                  "W",
                  "W"
                ],
                "teamImageId": 225643
              },
              {
                "teamId": 971,
                "teamName": "GT",
                "matchesPlayed": 12,
                "matchesWon": 5,
                "matchesLost": 7,
                "points": 10,
                "nrr": "-1.063",
                "teamFullName": "Gujarat Titans",
                "teamMatches": [
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1711288800000",
                    "result": "Won by 6 runs",
                    "opponentSName": "MI",
                    "matchId": 89675,
                    "matchName": "5th Match",
                    "winner": 971,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1711461600000",
                    "result": "Loss by 63 runs",
                    "opponentSName": "CSK",
                    "matchId": 89689,
                    "matchName": "7th Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1711879200000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "SRH",
                    "matchId": 89717,
                    "matchName": "12th Match",
                    "winner": 971,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1712239200000",
                    "result": "Loss by 3 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 89749,
                    "matchName": "17th Match",
                    "winner": 65,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1712498400000",
                    "result": "Loss by 33 runs",
                    "opponentSName": "LSG",
                    "matchId": 89770,
                    "matchName": "21st Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1712757600000",
                    "result": "Won by 3 wkts",
                    "opponentSName": "RR",
                    "matchId": 91393,
                    "matchName": "24th Match",
                    "winner": 971,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1713362400000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "DC",
                    "matchId": 91452,
                    "matchName": "32nd Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1713708000000",
                    "result": "Won by 3 wkts",
                    "opponentSName": "PBKS",
                    "matchId": 91488,
                    "matchName": "37th Match",
                    "winner": 971,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1713967200000",
                    "result": "Loss by 4 runs",
                    "opponentSName": "DC",
                    "matchId": 91515,
                    "matchName": "40th Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1714298400000",
                    "result": "Loss by 9 wkts",
                    "opponentSName": "RCB",
                    "matchId": 91551,
                    "matchName": "45th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1714831200000",
                    "result": "Loss by 4 wkts",
                    "opponentSName": "RCB",
                    "matchId": 91600,
                    "matchName": "52nd Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1715349600000",
                    "result": "Won by 35 runs",
                    "opponentSName": "CSK",
                    "matchId": 91650,
                    "matchName": "59th Match",
                    "winner": 971,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1715608800000",
                    "opponentSName": "KKR",
                    "matchId": 91677,
                    "matchName": "63rd Match",
                    "winner": 1,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1715868000000",
                    "opponentSName": "SRH",
                    "matchId": 91690,
                    "matchName": "66th Match",
                    "winner": 1,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  }
                ],
                "form": [
                  "W",
                  "L",
                  "L",
                  "L",
                  "W"
                ],
                "teamImageId": 235085
              },
              {
                "teamId": 62,
                "teamName": "MI",
                "matchesPlayed": 12,
                "matchesWon": 4,
                "matchesLost": 8,
                "points": 8,
                "nrr": "-0.212",
                "teamFullName": "Mumbai Indians",
                "teamMatches": [
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1711288800000",
                    "result": "Loss by 6 runs",
                    "opponentSName": "GT",
                    "matchId": 89675,
                    "matchName": "5th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1711548000000",
                    "result": "Loss by 31 runs",
                    "opponentSName": "SRH",
                    "matchId": 89693,
                    "matchName": "8th Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1711980000000",
                    "result": "Loss by 6 wkts",
                    "opponentSName": "RR",
                    "matchId": 89731,
                    "matchName": "14th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1712484000000",
                    "result": "Won by 29 runs",
                    "opponentSName": "DC",
                    "matchId": 89763,
                    "matchName": "20th Match",
                    "winner": 62,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1712844000000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "RCB",
                    "matchId": 91398,
                    "matchName": "25th Match",
                    "winner": 62,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1713103200000",
                    "result": "Loss by 20 runs",
                    "opponentSName": "CSK",
                    "matchId": 91425,
                    "matchName": "29th Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Punjab Kings",
                    "startdt": "1713448800000",
                    "result": "Won by 9 runs",
                    "opponentSName": "PBKS",
                    "matchId": 91461,
                    "matchName": "33rd Match",
                    "winner": 62,
                    "opponentId": 65,
                    "opponentImageId": 225648
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1713794400000",
                    "result": "Loss by 9 wkts",
                    "opponentSName": "RR",
                    "matchId": 91497,
                    "matchName": "38th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1714212000000",
                    "result": "Loss by 10 runs",
                    "opponentSName": "DC",
                    "matchId": 91533,
                    "matchName": "43rd Match",
                    "winner": 61,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1714485600000",
                    "result": "Loss by 4 wkts",
                    "opponentSName": "LSG",
                    "matchId": 91569,
                    "matchName": "48th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1714744800000",
                    "result": "Loss by 24 runs",
                    "opponentSName": "KKR",
                    "matchId": 91596,
                    "matchName": "51st Match",
                    "winner": 63,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1715004000000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "SRH",
                    "matchId": 91623,
                    "matchName": "55th Match",
                    "winner": 62,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1715436000000",
                    "opponentSName": "KKR",
                    "matchId": 91654,
                    "matchName": "60th Match",
                    "winner": 1,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1715954400000",
                    "opponentSName": "LSG",
                    "matchId": 91699,
                    "matchName": "67th Match",
                    "winner": 1,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  }
                ],
                "form": [
                  "L",
                  "L",
                  "L",
                  "L",
                  "W"
                ],
                "teamImageId": 225645,
                "teamQualifyStatus": "E"
              },
              {
                "teamId": 65,
                "teamName": "PBKS",
                "matchesPlayed": 12,
                "matchesWon": 4,
                "matchesLost": 8,
                "points": 8,
                "nrr": "-0.423",
                "teamFullName": "Punjab Kings",
                "teamMatches": [
                  {
                    "opponent": "Delhi Capitals",
                    "startdt": "1711188000000",
                    "result": "Won by 4 wkts",
                    "opponentSName": "DC",
                    "matchId": 89661,
                    "matchName": "2nd Match",
                    "winner": 65,
                    "opponentId": 61,
                    "opponentImageId": 225644
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1711375200000",
                    "result": "Loss by 4 wkts",
                    "opponentSName": "RCB",
                    "matchId": 89682,
                    "matchName": "6th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Lucknow Super Giants",
                    "startdt": "1711807200000",
                    "result": "Loss by 21 runs",
                    "opponentSName": "LSG",
                    "matchId": 89710,
                    "matchName": "11th Match",
                    "winner": 966,
                    "opponentId": 966,
                    "opponentImageId": 389444
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1712239200000",
                    "result": "Won by 3 wkts",
                    "opponentSName": "GT",
                    "matchId": 89749,
                    "matchName": "17th Match",
                    "winner": 65,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1712671200000",
                    "result": "Loss by 2 runs",
                    "opponentSName": "SRH",
                    "matchId": 91389,
                    "matchName": "23rd Match",
                    "winner": 255,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1713016800000",
                    "result": "Loss by 3 wkts",
                    "opponentSName": "RR",
                    "matchId": 91416,
                    "matchName": "27th Match",
                    "winner": 64,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Mumbai Indians",
                    "startdt": "1713448800000",
                    "result": "Loss by 9 runs",
                    "opponentSName": "MI",
                    "matchId": 91461,
                    "matchName": "33rd Match",
                    "winner": 62,
                    "opponentId": 62,
                    "opponentImageId": 225645
                  },
                  {
                    "opponent": "Gujarat Titans",
                    "startdt": "1713708000000",
                    "result": "Loss by 3 wkts",
                    "opponentSName": "GT",
                    "matchId": 91488,
                    "matchName": "37th Match",
                    "winner": 971,
                    "opponentId": 971,
                    "opponentImageId": 235085
                  },
                  {
                    "opponent": "Kolkata Knight Riders",
                    "startdt": "1714140000000",
                    "result": "Won by 8 wkts",
                    "opponentSName": "KKR",
                    "matchId": 91528,
                    "matchName": "42nd Match",
                    "winner": 65,
                    "opponentId": 63,
                    "opponentImageId": 225646
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1714572000000",
                    "result": "Won by 7 wkts",
                    "opponentSName": "CSK",
                    "matchId": 91578,
                    "matchName": "49th Match",
                    "winner": 65,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Chennai Super Kings",
                    "startdt": "1714903200000",
                    "result": "Loss by 28 runs",
                    "opponentSName": "CSK",
                    "matchId": 91609,
                    "matchName": "53rd Match",
                    "winner": 58,
                    "opponentId": 58,
                    "opponentImageId": 225641
                  },
                  {
                    "opponent": "Royal Challengers Bengaluru",
                    "startdt": "1715263200000",
                    "result": "Loss by 60 runs",
                    "opponentSName": "RCB",
                    "matchId": 91645,
                    "matchName": "58th Match",
                    "winner": 59,
                    "opponentId": 59,
                    "opponentImageId": 225643
                  },
                  {
                    "opponent": "Rajasthan Royals",
                    "startdt": "1715781600000",
                    "opponentSName": "RR",
                    "matchId": 91686,
                    "matchName": "65th Match",
                    "winner": 1,
                    "opponentId": 64,
                    "opponentImageId": 225647
                  },
                  {
                    "opponent": "Sunrisers Hyderabad",
                    "startdt": "1716112800000",
                    "opponentSName": "SRH",
                    "matchId": 91713,
                    "matchName": "69th Match",
                    "winner": 1,
                    "opponentId": 255,
                    "opponentImageId": 225649
                  }
                ],
                "form": [
                  "L",
                  "W",
                  "W",
                  "L",
                  "L"
                ],
                "teamImageId": 225648,
                "teamQualifyStatus": "E"
              }
            ]
          }
        ],
        "appIndex": {
          "seoTitle": "Indian Premier League 2024 Points Table | Cricbuzz.com",
          "webURL": "www.cricbuzz.com/cricket-series/7607/indian-premier-league-2024/points-table"
        }
      }


      const [tableData , setTableData] = useState([]);
      async function fetchPointsTable(){
        const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/series/7607/points-table';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();

	setTableData(result.pointsTable[0].pointsTableInfo);
} catch (error) {
	console.error(error);
}
      }

      useEffect(()=>{
        fetchPointsTable()
      })




  return (





    <div className="w-full h-fit flex justify-center items-center mx-auto">
  <table className="w-full md:w-[55%]  sm:p-1 bg-[#303134]">
    <thead className="w-full">
      <tr className="text-center w-full">
        
        <th className="w-[36%] flex justify-start ">Team</th>
        <th className="w-22">M</th>
        <th className="w-22">W</th>
        <th className="w-22">L</th>
        <th className="w-22">NRR</th>
        <th className="w-22">PTS</th>
        <th className="w-22">Last 5</th>
      </tr>
    </thead>
    <tbody className="">
      {tableData.length <= 0 ? (
        <tr>
          <td colSpan="8" className="text-center py-4">Loading...</td>
        </tr>
      ) : (
        tableData.map(({ form, matchesPlayed, matchesLost, matchesWon, nrr, teamName, points, teamImageId }, i) => (
          <tr key={i} className="text-center   border-t">
            <td className="flex gap-2 items-center">
              <span className="w-2 text-center">{i + 1}</span>
            <span className="flex items-center justify-center">
              <img className="w-10 h-10 mr-2 object-contain" src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267650/iplTeamLogo/${teamImageId}`} alt={teamName} />
            </span>
              <span>{teamName}</span>
            </td>
            <td>{matchesPlayed}</td>
            <td>{matchesWon}</td>
            <td>{matchesLost}</td>
            <td>{nrr}</td>
            <td>{points}</td>
            <td className="flex justify-center gap-1">
              {form.reverse().map((data, i) => (
                <i key={i} className={`text-${data === 'W' ?'green' : 'red'}-500 fi ${data === 'W' ? 'fi-ss-check-circle' : 'fi-sr-cross-circle'}`}></i>
              ))}
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

  )
}

export default PointsTable