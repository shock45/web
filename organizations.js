// Sample data for demonstration
const organizations = [
  {
    id: 1,
    name: "עמותת ספורט קהילתי",
    category: "sports",
    location: "kiryat shmona",
    activity: "volunteer",
    description:
      "עמותה המקדמת ספורט קהילתי ופעילות גופנית לכל הגילאים בקריית שמונה",
    image: "https://via.placeholder.com/300x200",
    rating: 4.6,
    date: "2024-03-05",
  },
  {
    id: 3,
    name: "תוצרת הארץ קריית שמונה",
    category: "community",
    location: "kiryat shmona",
    activity: "projects",
    description:
      "חברי הקהילה מובילים פרויקטים מקומיים, מחזקים את הקשרים בעיר ומשאירים חותם בדרך לעיר מלאת חיים וחזקה יותר מאי פעם",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAf-DYcMerTL3vaj9G6x8-FuhaEGsfhXTGRQ&s",
    rating: 4.8,
    date: "2024-02-20",
  },
  {
    id: 4,
    name: " חינוך לפסגות",
    category: "education",
    location: "north",
    activity: "volunteer",
    description: "עמותה העוסקת בחינוך ילדים בצפון הארץ",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMTFhUVGBcYFxgXGBgZGBsYFhkXGRoYHRUYISggGRolHRofITEhJSktLi4vICszODMxNzAvMDABCgoKDg0OGxAQGy8mICA1MDAwMDAvMDAwMDAwMDAwMDAwMDAwLzAwMC8vLy8vLzAvLy8vLy8tLzAwLy8tLy8wL//AABEIAG8BNAMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABAEDBQYHAv/EAEQQAAICAQIDBAQJCwMDBQAAAAECAAMRBBIFITEGB0FREyJhcTI0QnOBkbGy0RQjJDM1cqGzweHwFlLCU2KSFUNUY4L/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QAMhEAAgIBAQUHAgYDAQEAAAAAAAECAxEEEiExMkEFEzNRYXGBIqEUkbHR4fBCUsEjYv/aAAwDAQACEQMRAD8A7jAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBALGr1ddS77HVFHixAH1mZjFyeEjDaW9mKPbDQ//ACa/rP4Tt+Gt/wBTn31fmZpGBAI5g8xOB1PUAQBAPFtgUFmOAJhtJZZpZZGuLlJ4SNc1/EGsOBkL4AePvlfZc5vdwPNarXWXyxHcui/c8aTWvU3jjxU/5yMxCyUGaafVW6eXp1TNk096uoZTy/zkZYRkpLKPTU3Qtipw4F2bHUQBAEAQBAEAQBAEAQBAEAoTAKbx5iMAqDAKwChMAAwCsAoGHmIAJgFN48xGAVDDzgFYBQmAU3jzEYBUGAVgHG+9XXO+sNRJ2VKoUeGWAYnHnzA+iXOhglXnzK7UybnjyJPD+7O2ypLDfWu9Q2NpOAwyAT585rPXxjJrHA2jpW1nJ1eivaqr5AD6hKlvLyTkXJgyIB4tsCgsTgCYckllmllka4uUnuRrXENc1rYGdvgP6++V9trsZ5jV6ueolhcOi/vUyvCuG7PWb4X2f3kmmnZ3viW2h0CqW3Pm/T+S5xPh4sGRyYdD5+wza2pTWVxOut0SvWVzIwml1L0v/BlP+fxkOE5VyKKi+zS2fqjZdPerqGU8v85GWEZKSyj09N0LYbcOBdmx1EAQBAEAQBAEAQBAEAQDn3fF+po+cb7ssOzuZkTV8EaHwbsxqtUhsoQMobaTvVeYAOMMR4ESfZqK63iTIsKpTWUXeIdmNdpV9K9bIoxlldTj37Dke+YhqKrHspmZVTgstG692Pai25m01zFyq7kc/CwCAVJ8euQevX2SFrdPGK24knTWuX0s898f6vT/ALz/AGLHZ3GQ1fBE/uk+JN88/wB2uaa/xfg20vIbdxD9VZ+432GQ4cyJEuDOKd3n7Q0/vf8AlvLvV+DL+9Sto8RG997vxNPnl+5ZIHZ/iP2/YlarkOccE7OanVBmoQMFIB9ZV5nn8oiWVt8K3iTIcKpT4E6/sPxBAW9CTjn6roT9QOT9E0Wrpe7Js6LF0Ml3fdqrk1CUWOz1WHYAxJKsfg4J6DPLHtnLV6eLg5Jb0b0WtS2XwZsPfB8Xp+d/4tI/Z/O/Y7avlRz/AIL2Z1WqQvQgZVO0ncq88A9GI8DLCy+ut4kyJCqU1lFzX8I1uhw7rZVk4Do/LPXG5DyPsMxC2q7ct5mUJ173uOm93XaN9XSy2nNtRAJ/3K2drH28iD7pV6yhVyzHgyZp7XNb+KOf95n7Qt91f8tZY6LwV8kXUeIzsHBPi9PzVf3RKaznfuWEOVE2aGwgCAa/xw2FwCPV+Tjx/vIOo2nLD4Hnu03c7FFrd0x1/km8K4bs9ZvhfZ/edqadne+JO0GgVS25836fyZOSCzEAg8T4eLBkcmHQ+fsM421KayuJA1uiV6yuZGJ4V6RbNqj94HpiRqdtTwvkqdAr4X7MV7p/38jZJPPSiAIAgCAIAgCAIAgCAIBz7vi/UUfON92WHZ3MyJq+VF/ug+KWfPH7lcx2h4i9jOl5WbR2lUHSakH/AKNv3GkSnxI+6O9nIzlHdb8fX9yz7Jba7wmQdN4hsnfJ+r0/7z/Ysj9ncZHbV8ET+6T4k3zz/drnPX+L8G2l5DaeM3qlFrsQFWtyT9BkStNzSR3m8RbOMd3n7R0/vf8AlvLrV+DL+9Suo8RG/d7a50S+y5c/+LiQNB4vwStVyGO7nLhs1CZ9bcjY9mCMzp2inmLNNI9zR0ZmwMnkBK0mHA9CQ/EEKdG1KlceRtBH8J6CW6l58v8AhVR32bvM6x257Ovraq0rdFKPuO7PkR4D2yo0t6qk20T7q3YsIr2G7PPoqnrsdGLPuBXOMbQPEeyNVerZJoU1uCwyL3o3KNA4YjLMgUeOQwJx9AM20KbtWDXUtd2a33OA+k1B8NqfWS2PsMldo8InHScWYTvM/aFvur/lrO+i8FfJz1HiM7BwT4vT81X90Sms537lhDlRNmhsIAgFCJgw0nxKzJkQBAEAoFHl1mMGMLOSsyZEAQBAEAQBAEAQBAEAQDinHeC8Rtts3Val09I5QNuZQCxxgE4HLyl3VbTGK3rJWzhY29zN67sOHW0aaxbq2rY2kgMMHGxBn6xIGtnGc04vO4laaLjF5Ni49Uzaa9VBLNVYAB1JKEAD6ZGqaU4t+aOs1mLObd3nAdTTrVe2ixF2uNzDA5jlLPV3VyqaiyHRXKM8tGe70+F3XpQKansKs5O0ZxkLjM4aGyMHLaeDrqYSklhF7sFw+6nQXI9bpYWsKg8mOa1AI+kTXVTjK5NPK3GaIuNbTNEbs/xS/COmoYZ/9xztHt9c4k/vtPDemvgjd3bLc8k/sR2d1VWupeyixVUtliOQyjDr7zOepvrlU0mbU1zU02jp/HuEpqqHpc4DDkR1DA5B+gyrqsdc1JE2cFOOGch1PZHiGmszXXYSOj0knI//AD6w+kS4jqabFvf5le6bIvd9jzdRxW4bHXWsp6hhZtPvzy+uE9PDesfYNWy3PJtPYLsPZVaNRqQFKfq68gnceW5schjwHn5Y5xdVq4yjsQO9FDT2pGa7xqdU1NY0vpt2/wBb0RIO3aeu3wzOGjdak9vHydNQpNLZNA/IOL+Wt/8AOz8ZYbem9CLs3epb/wBLcSvYb6rmPTNrdPpczP4iiC3NfBjurZcUdQ7Fdm/yKgqSGsc7rCOnLkFHsH9TKvU397LPRE2mrYjjqaL2/wCAaq3XWPXRY6EJhgMg4RQf4yfpLq41JNka+uTm2kdQ4QhWipWBBFaAg9QQoyJV2PM215k2PKjkeu0XFjY+0a3bubGGsxjJxjnLeM9PsrOCA4256kIcf4jpHAey9WHPbduII9z+HtE37mixbkvg17yyD3tnXOynGxrNMt2AG5q6joGXrj2EYP0yovq7qbiT6p7ccnNO8Pit9evtVLrlUCvCq7ADNa+AMs9JXB1JtL+sh3zkpvDOscJYmiokkk1oST1J2jnmVNnMydHlRp/evrLKqaTXY6EuwJRiufV8cSZoIxlJ5RH1UmksF/uq1dlmlsax3ci4gF2LHGxOWT4TXXRUZrC6GdM24vJpfbzi16a+9UvuVQUwq2MAPUU8gDJulrg6k2kR75yU3hnVNXYRonYE7vQMc5559GTnPnmVUUu9S9f+k58nwcU0XEdda4Sq7UuxzhVssJ5czyzLuUKorLS/IrVKbeE2ZA6Ti45413L/ALrfxnPa03/z9jfF3qXuBdutVp7ALna2vOHV+bjwOGPMMPIzW3SVzj9KwzMNROL3nZ63DAMDkEAg+YPQylaxuLA9QZEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQDn/AHw1j8npbHMWEA+wqSR/ASw7Pf1tehE1a+lHrufP6NcP/t/4LHaHOvYzpOVmn95f7Ru91f8ALSTNF4K+f1I+o8RnYuD/ABen5uv7olNZzv3LCHKjSe+L9TR8433ZN7P5mRtXwRI7oPilnzx+5XMdoeIvYzpeRmtdt+zuqt111ldFjIxXDAcjhFH2iSdNfXGpJs43Vzc20jpWvUjRWAjBGnYEe30ZlZHxV7/9JsuT4OUd2P7Qq/ds+40ttb4LIGm8RHbJSFkcT7zqwNfZgYyqE+/aOcu9E80ordQv/RnXOzx/RdP8zV9xZUXeJL3ZPr5UZCczcQBAEAQBALd1m1Sxzy8prJ7Kyc7LFXByfQwum40dx3j1SfDw/GRIal5+rgUlPastt94tz+37mbqtDDKkEeyTIyTWUXkLI2R2ovKPcybiAIAgCAIAgCAIAgCAIAgCAUgGJ4lxYDK18z4t4D3eci26jG6JT6ztJR+irj5/sSuFas2JzByORPgZ0psc47yVoNTK+vMlvXXz/vUmzsTjQu+D4tV87/waT+z+d+xF1fKjz3PfF7vnf+KzPaHOvYaTlZqvePpnbiFxVHIxXzCkj9WnjJWjklSsvz/Uj6hPvGbr2s1+oo4fp205ZX/NKcLk49GxIIIOOYEhUQhO6Snw3/qSbZSjWnE5xr7tdrGUWC+0j4I2HlnGeSgDw6yyiqaluwiJJ2T4nWOwXBX0ukCWcnZi7DrgnAAyOpwB9MqdVarLMrgTqIOEMM2ORjsQeOD9Gv8AmrPuHwm9XOvdGs+VnJe7bTOuvrLI4GLOZUgfAbxlvrJJ0vDIGnT7xHaJSlica7zdM7a9yqMRsTmFJHwfOXOiklUssrtSntnVezw/RdPnl+Zq69fgL4Squ8SXuydXyoyE5m4gCAIAgCAIBi9fwgN6yYU+XgfwkazTqW+JVavsyNn1V7n9v4MOr2Ut4qfLwP8AQyKnOtlNGV+ln1TMvpONKeTjafPw/tJUNSnzFxR2rCW6xYf2MmjgjIII8xJCafAtIzjJZi8o9TJsIAgCAIAgCAIAgCAIBD1XEa06nJ8hzP8Aacp3RiQ79dTTxeX5Iwmt4k9nLovkPH3nxkOy6U93Qo9Tr7b/AKVuXkSNBwgt61nIeXifwnSvTt75EjSdmSn9Vu5eXX+DOogAwBgDwkxJJYRfRiorEVuPUybGmd6HDbb9PUtNbWEWZIUZwNrDMm6GcYTbk8biNqYuUVgp3X8NuootW6tqybMgMMZG0DMa6yM5JxeRpouMXk3SQiSIAgCAIAgCAIAgCAIAgCAIAgCAIAgFu6lXGGAImsoqSwznZVCxbM1lGI1XBPGs/QfxkWem/wBSnv7J61P4f7mOKWVH5S/Z9fQzhidb8itcb9NLqiXRxtx8IBv4GdY6mS4kyrta2POs/Yn1carPXK/Rn7J2Wpg+JPr7VolzZRKr1tZ6Ov14+2dVZB9SXDV0z4SRfVgehBmyZ3Uk+BWZMiAUMAtvqEHVlH0iaucVxZylfXHmkvzI1nFah8rPuBnN3wXUjT7R08f8s+xDu47/ALV+lvwE5S1XkiFZ2wv8I/mQLtfa/LJ9y8vs6zhK2c9xX2ay+7c38Iu6bhFjdfVHt6/VNoaeT47jrR2ZdZvl9K9f2MzpOHpX0GT5nr/aS4VRhwLvT6Kqnell+bJc6ksQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAoRnrBhpNYZDv4XU3ycH/t5fw6TjKiD6EO3s+iz/HHtuIVnAv9r/WP6icnpfJkGfY/+kvzIr8GtHTB9x/Gc3p5oiS7LvXDD+f3LJ4faPkN9H9pp3U10OL0Woj/AIsp6G4fJs+ppjZs9THdaldJfceju8rPqaMWeo2NS+kvuPyO0/If6Qf6zPdzfRj8LqJf4suJwm0/Jx7yJlUTfQ6R7N1D/wAfuiTXwJvlMo92T+E6LSy6skw7IsfNJL7/ALEungtY6kt/AfwnWOmiuJMr7KpjzNsnU0KvwVA9wnaMVHgifXTXXyJIuzY6iAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBrPamzU6cWamvUKECqBU1e/L5wApDAgsSB0kqhQniDjv88nGxyjmSZTX8ffTXUpcysppBv2o35pshRbu6ejZsrt6jGYjSrItx893r6e5iVji0n8l7Q3azUUV2K9dJY2N69RZtm7816u4YyvM+8TWSqhNprPz+ZtFzlFPgRNF2jud9IpCBrfypbQASC+n5DYeuCeeJvKiKUn5Yx8misbaXnn7HnTcd1J9ErKBY2ltuZNhDB1IC+rnIB8vGHTXva4ZSCslu9sk5zrbKKrUsqqb0Ku6PUSTYVyyn1hsXw6ZE0/8oyaazv8APob/AFuKaMjwXXG/T13Y2mxA2OoBI+zM52Q2JuPkbQltRTMOLtauqpoa+lwytY/5kr6iFQQDvPrHdj2dec7Yqdbkk/Lj/BzzNSSz9izrOK6sUhxtrY6o0jfWTmtrNiNjI9+fGZjXXtY47s8euDDnPGfXB7fimrT8qpY1PdTSLq3VCAw9bKtWScNlSBg+Mwq63syWcN4Znbmsrqt5M0fGmt1FCLt2W6b05HyhkoF+j1iJpKpRhJving2U8yS81kpx/XXrqNNRQ6J6YXFmZN+PRqrDAyPMzNUIOEpSXDH3E5S2lFdSEnGtXkVFVeyvV1U2siMVNLruL7c+oQDzPQTfuq+bo02vc1258PX7DiPHNRSNcCa2NCpZUdpHq2FvVYZ5kY6jrEKYS2PXc/gSsktr0JfG7tYlb6iuykJXX6T0bVklgq7nzZu5HkcYE0qVbag08vrk2m5pbSZnNLdvRXHIMobH7wzOElhtHRPKyc671uPXVvXp62ZFKb2KkgtlmAGRzwNvT2yx0FMZJzZE1NjT2Uee6rjt1lj6ex2dQm9SxJKkMoIyeeDu6eyZ11MVFTW4xprG24s6U7AAkkADmSegHnKwmmI4V2gW5wnorUDqXqZwALEUgFhg5HUHBxyIM7TpcFnKeOPoc42KTxgpqe0SJaU9HYyK6VvaAPRpZZjap55PwhkgcsiZjQ3HOd/HAdiTwQOLcaCak89VspNS3bPR+jU2/AyrDe2dwzt9k3rqzDpl5xxzu+xpKeJddxhuLn9L1XM/GOG/1navw4+0jnLnfvE3Li/E/QhAEayyxttaLgFiAWPNiAAACSTIdde3nfhIkSlskT/15m04vq09lnNg6ZVWTYSHzk+sQRjA6zfuUp7MpYNe8zHaSKvxZHbRsrWgajJQDaFP5stiwHnyHl4zCraU08bv36GdtPZ9SbxbiS0IGYFizKiKvwnduijPj+E0rrc3hG0pKKyQP9Sp6B7jXYDVYKrKyBuVyyrjOcEeuDkHpOncPbUc8Vk071bOfIiae/Zrtc5V2CU0NtUZY4DnAHiTjpN2tqqC9Wap4nJ+x60naD8oruGyyrZULQ9b1udjAkYIyFchfgmYlTsNb878dTKs2k+hh+L3bvyNw1jB9NrXBsxvw9QYA7cDkDjlO1axtrycf1Oc3nZfozauzPxPTfMU/wAtZFu8SXuzvXyL2MnORuIAgCAIAgCARNfw+u70fpAT6N1sUZIG5c4Jx1x5TaE3HOOu41lFPGSjcMqL2WFcm1BW4PMFV3ctvT5Rme8lhLyGyst+Z70GjWmta1LFV5DcxY48BuPPA6D2TE5OTyzMVhYRCs7O0Gv0e1sB2sUhmDq7EksrjmDkzdXzUs/Bp3ccYLnC+C10FmXe7sAGssdncgdBuboPYJidsp7nw8kZjBRHE+DJewZnvXA24rtdFI59VU4J59Yha4LCS/ISgpF7hXDk09Yqr3bFzgMxbGfAE+HsmLJuctpmYxUVhHp9ChtW4g71VkBycbWIJ5e8CY23s7PQbKzkt8Q4VXc9bWbj6JtyqGIXcCCCyjkxBHLMzCxxTS6iUFJrPQ8arhCOz2BrEssRULo2GCq24YyCAefXEzG1pJcUjDgm8nngvAqdKMVA5IALMxZsDoMnoB5DAmbbpWcwhXGHArxbgtWoZGc2Bq92xkdkYb8BuanxwJiu2UE0uolBS4nrhPCK9Pv2bybCCxd2diQMDm3PpFlsp4z0EYKPAjns3Ri4H0jflAAsLOxJCkkAEnkBnwm3fz3enAx3Ud/qOIdnariS734YBSq3OqEYxjYDjmOvnEL5R4JfkJVqXHJkdDpVqrWtd21BgbiWOPeeZnOUnJ5ZulhYRie1HZinWqosyrpna64yAeoIPUTrRqJVPcc7KlPiU7LdlqdErbCzO+NztjOB0AA6D/PKL9RK17xVUq+B57aoTQnUp6an0qj5dZcBk+nImdM/r9cPHuLuX5R6PY/R5z6Jh5YstG0eS4b1R7BgTH4m3z+yHcw8h/o7Rf8AROOZI9JZgk59Zhu9ZufU8/4R+Kt8/sh3MPI8HsVoiSTUxJxkm27PLpz3+Hh5TP4u3z+yHcQ8v1JOn7MaVAQtZ9Z63JLuxLVHKHLMTyz0mr1Fj6/1mVVFHvtHww6irYFrLBgQbN+Fx8oGshgw9hExTZsSyLI7SwY7h/YjTV1hGNrtz3N6W1dxJyTtVgB/nXrOk9XNvKwvhGsaIpYZL0PZXS0uj11sGrzszZYwXIIOFZiOh8prLUWSTTfH0RtGqCeUQuJ8OW7iCpcpev8AJiaxuI22Cz1mGCCGwR6w8pvCbhTmPHP/AA0lFSsw/IpxLsZSVAoqr3Zy3pXvKtybmVVxubdjmfwiGqln6n+WP2EqY43L9STX2P0g5+jYMcZYXXAnkOW7fkjyBmr1Nnn9kbdzD+5KnsbosYFJUEYIWyxQR05hWAP0x+Kt8/sh3MPIuUdlNIh3LUR6rKPXsICuNrAKWwuR5TD1FjW9/oFTBdDLaXTrWi1oMKihVHM4VRgDJ59BOMm5PL6nRLCwi7MGRAP/2Q==",
    rating: 4.5,
    date: "2024-01-15",
  },
  {
    id: 5,
    name: "מרכז הצעירים קריית שמונה",
    category: "youth",
    location: "kiryat shmona",
    activity: "projects",
    description:
      "מרכז המספק תמיכה והכוונה לצעירים בתחומי תעסוקה, השכלה גבוהה ויזמות",
    image: "https://via.placeholder.com/300x200",
    rating: 4.9,
    date: "2024-01-05",
  },

  {
    id: 10,
    name: "מרכז תרבות ואמנות",
    category: "culture",
    location: "kiryat shmona",
    activity: "events",
    description:
      "מרכז המקדם תרבות ואמנות בקריית שמונה, עם דגש על זהות מקומית ומורשת",
    image: "https://via.placeholder.com/300x200",
    rating: 4.8,
    date: "2024-02-10",
  },
];

// DOM Elements
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const activityFilter = document.getElementById("activityFilter");
const sortFilter = document.getElementById("sortFilter");
const resultsGrid = document.getElementById("resultsGrid");
const resultsCount = document.getElementById("resultsCount");
const viewButtons = document.querySelectorAll(".view-btn");

// Event Listeners
searchInput.addEventListener("input", filterResults);
categoryFilter.addEventListener("change", filterResults);
locationFilter.addEventListener("change", filterResults);
activityFilter.addEventListener("change", filterResults);
sortFilter.addEventListener("change", filterResults);

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    resultsGrid.classList.toggle("list-view", button.dataset.view === "list");
  });
});

// Filter and display results
function filterResults() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const location = locationFilter.value;
  const activity = activityFilter.value;
  const sortBy = sortFilter.value;

  let filteredResults = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm) ||
      org.description.toLowerCase().includes(searchTerm);
    const matchesCategory = !category || org.category === category;
    const matchesLocation = !location || org.location === location;
    const matchesActivity = !activity || org.activity === activity;

    return (
      matchesSearch && matchesCategory && matchesLocation && matchesActivity
    );
  });

  // Sort results
  filteredResults.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      default:
        return 0;
    }
  });

  displayResults(filteredResults);
}

// Display results

function displayResults(results) {
  resultsCount.textContent = `${results.length} תוצאות נמצאו`;

  resultsGrid.innerHTML = results
    .map(
      (org) => `
        <div class="result-card">
            <img src="${org.image}" alt="${org.name}">
            <div class="result-content">
                <h3>${org.name}</h3>
                <p>${org.description}</p>
                <div class="result-tags">
                    <span class="tag">${getCategoryName(org.category)}</span>
                    <span class="tag">${getLocationName(org.location)}</span>
                    <span class="tag">${getActivityName(org.activity)}</span>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// Helper functions to get display names
function getCategoryName(category) {
  const categories = {
    education: "חינוך",
    health: "בריאות",
    environment: "סביבה",
    social: "רווחה",
    animals: "בעלי חיים",
  };
  return categories[category] || category;
}

function getLocationName(location) {
  const locations = {
    north: "צפון",
    center: "מרכז",
    south: "דרום",
    jerusalem: "ירושלים",
  };
  return locations[location] || location;
}

function getActivityName(activity) {
  const activities = {
    volunteer: "התנדבות",
    donation: "תרומות",
    events: "אירועים",
    projects: "פרויקטים",
  };
  return activities[activity] || activity;
}

// Initial display
filterResults();
