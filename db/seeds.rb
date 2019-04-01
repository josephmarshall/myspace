User.create(email: "test@test.com", password: "password", image: "http://sapainting.us/wp-content/uploads/the-kramer-painting-kramer-seinfeld-painting-unisex-t-shirt-artkeepsake-redbubble.jpg", name: "Cosmo Kramer", nickname: "Professor Peter van Nostrand")
User.create(email: "elaine@test.com", password: "password", image: "https://upload.wikimedia.org/wikipedia/en/3/33/Elaine-benes-3707.jpg", name: "Elaine", nickname: "Personal Assistant")
User.create(email: "george@test.com", password: "password", image: "https://vignette.wikia.nocookie.net/seinfeld/images/7/76/George-costanza.jpg/revision/latest/scale-to-width-down/250?cb=20110406222711", name: "George", nickname: "Yankees Manager")
User.create(email: "jerry@test.com", password: "password", image: "https://media1.fdncms.com/metrotimes/imager/u/blog2x/4561509/screen_shot_2017-07-14_at_10.32.33_am.png", name: "Jerry", nickname: "Comedian")
User.create(email: "newman@test.com", password: "password", image: "http://www.seinfeldscripts.com/images/newman1.jpg", name: "Newman", nickname: "Mail Worker")

Post.create(
user_id: 2, title: "Trapped in a stopped Train",
body: "Oh, this is great. This is what I need, just what I need.
Ok, take it easy I'm sure it's nothing. Probably rats on the track, we're
stopping for rats. God, it's so crowded. How can there be so many people?
This guy really smells, doesn't anyone use deodorant in the city? What is
so hard, you take the cap off, you roll it on. What's that? I feel
something rubbing against me. Disgusting animals, these people should be in
a gage. We are in a gage. What if I miss the wedding? I got the ring.
What'll they do? You can't get married without the ring. Oh, I can't
breath, I feel faint. Take it easy, it'll start moving soon. Think about
the people on the concentration camps, what they went through. And
hostages, what would you do if you were a hostage? Think about that. This
is nothing. No, it's not nothing, it's something. It's a nightmare! Help
me! Move it! Com'on move this fu(beep) thing!! Why isn't it moving?!? What
can go wrong with a train!?! It's on tracks, there's no traffic! How can a
train get stuck. Step on the gas!! What could it be? You'de think the
conductor would explain it to us? 'I'm sorry there's a delay we'll be
moving in 5 minutes'!! I wanna hear a voice. What's that on my leg?!!
")

Post.create(
user_id: 3, title: "Theres nothing worse than a lousy tipper", body: "I always try to tip as much as possible, do you know that there are a
  bunch and I mean a really bunch of lousy tippers out there.  I saw an old lady tip her serve a quarter.  A whole quarter!  What a great
  wonderful place we're in when you can get a tip that is a whole quarter.  Hey buddy don't go and spend that quarter in one place, you want
  to make it last."
)

Post.create(user_id: 5, title: "I never work in the rain.", body: "I am a postal worker and I never work in the rain.  I hate getting wet
delivering mail and I don't care if you do have to wait for a package.  I'm not doing it.  Everyone knows that you can't leave the the
service once you've entered into the club you are there for life, and I want a life that isn't wet from rain.")

Post.create(title: "Why the universe is out to get me", body: "There are several reasons why the universe is out to get me.  Just this morning a 
black cat crossed my path and a white dove flew over my head at precisely the same time.  It is like the forces of good and evel and trying to reconcile
they're differences and I'm the one person in the middle that can't do anything about it.  Yesterday when I was getting on the train I noticed that
the train tracks are really rusty on the sides and really shiny on the top.  Hmmm.  Makes you wonder.", user_id: 1, likes: 213)

Post.create(title: "Conspiracy theories that actually are true for reals", body: "There are a number for conspiracy theories that are actually true.ascii_only
For example the theory that you can throw a hammer down below you and break the surface tension of the water before hitting is 100% truth.  I saw it on 
mythbusters and it is real.  I am not joking.  That's why whenever I fly over the ocean I carry a small hammer in my pocket so that if I am falling
to my doom I can throw it down below me and it will break the surface tension and save my life.", user_id: 1, likes: 5)

Post.create(title: "MH17: The real story behind the missing airliner", body: "The Malaysia 17 story has been told. But beneath the knotted narratives of the 
accepted version of events, well woven in the three years since the Boeing was brought into an afternoon cornfield in Ukraine, lies a simpler, darker truth. 
As industry experts, we’ve comforted ourselves knowing that 'Nobody considered that civil aircraft, at cruising altitude, were at risk' (Dutch Safety Board 
report). When fingers were pointed at Malaysia Airlines for overflying a war zone, we were quick to tell the public 'Not fair. Everybody else did as well'. 
We were all apparently operating under the same misguided reassurance that this was a war going on underneath the airways, and that cruising at 33,000 over 
the top of it would be just fine. As an airline pilot at the time, I did the same as everyone else using the eastern Ukraine routes, and monitored the conflict
 beneath us with interest on each flight, but without concern.
But what if we could have known — what if the risk information was actually there, but for some reason we weren’t seeing it?
Well, it was.", 
likes: 2, user_id: 1)

Friendship.create(user_id: 1, friend_id: 2)
Friendship.create(user_id: 1, friend_id: 3)
Friendship.create(user_id: 1, friend_id: 4)

puts "seeded."