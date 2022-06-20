+++
aliases = ["/logs/620"]
category = "Combat"
character = "Selkrener"
game = "Lithmeria"
points = 7
title = "Meet the Towerguard"
votes = 9
+++

[53msay This week's update revolves around the Towerguard, which is a kind of warrior trained in Aspalaria. Read [0m[53mmore about it on the forums, you can get the link in the log description.[0m
[1;36mYou say, "This week's update revolves around the Towerguard, which is a kind of warrior trained in Aspalaria. [0m[1;36mRead more about it on the forums, you can get the link in the log description."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53msay I will be demonstrating a few of the Towerguard abilities with the help of Kitai, the Game Logic Coder [0m[53mhere at Lithmeria. [0m
[1;36mYou say, "I will be demonstrating a few of the Towerguard abilities with the help of Kitai, the Game Logic [0m[1;36mCoder here at Lithmeria."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53msay First, the most basic of attacks is swing.[0m
[1;36mYou say, "First, the most basic of attacks is swing."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53mswing kit[0m
[37mYou strike Kitai with a swinging blow from a wooden practice sword.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53mab weaponry swing[0m
[37mSWING[0m
[37mSyntax: SWING <target>[0m
[37mAttack Type: Standard[0m

[37mThis swing deals more damage than the average attack but is also less accurate.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53msay As you can see from the ability file it is a standard attack, which means it can be used any time [0m[53mregardless of stance. Swing in particular does more damage at a cost of accuracy.[0m
[1;36mYou say, "As you can see from the ability file it is a standard attack, which means it can be used any time [0m[1;36mregardless of stance. Swing in particular does more damage at a cost of accuracy."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53msay Now let's move onto something that actually involves the stance system that makes a Lithmerian Warrior [0m[53mwhat it is.[0m
[1;36mYou say, "Now let's move onto something that actually involves the stance system that makes a Lithmerian [0m[1;36mWarrior what it is."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53mab maiming wound[0m
[37mWOUND[0m
[37mSyntax: WOUND <target>[0m
[37mAttack Type: Opener[0m

[37mWhile in the wounding stance every blow you land on a foe will strike an open wound, worsening their [0m[37mcondition and making them harder to heal.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53msay Wound is an opener in the specialization skill of maiming. When I use it on him, I will go into the [0m[53mwounding stance and be able to worsen any physical afflictions he has[0m
[1;36mYou say, "Wound is an opener in the specialization skill of maiming. When I use it on him, I will go into the [0m[1;36mwounding stance and be able to worsen any physical afflictions he has."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m -eblrg-][0m
[53mwound kit[0m
[37mYour eyes catch a wound on Kitai, and quickly you push a wooden practice sword into it.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53msay As you can see the Wounding stance goes into my prompt[0m
[1;36mYou say, "As you can see the Wounding stance goes into my prompt."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mdef[0m
[37mYou are in the Wounding stance for 2 more blows.[0m
[37mYou have a single defense.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53msay And is also in my defenses[0m
[1;36mYou say, "And is also in my defenses."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53msay Now there is an attack in Maneuvers called Flick. Which was in fact, Kitai's very first project.[0m
[1;36mYou say, "Now there is an attack in Maneuvers called Flick. Which was in fact, Kitai's very first project."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mab maneuvers flick[0m
[37mFLICK[0m
[37mSyntax: FLICK <target>[0m

[37mThis strike is not exceptionally fast or strong, but it is stable enough to not negatively affect your stance [0m[37mat all.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53msay Using it doesn't have any sort of special bonus, except for the fact that it won't count against the two [0m[53mhit limit of the stance.[0m
[1;36mYou say, "Using it doesn't have any sort of special bonus, except for the fact that it won't count against [0m[1;36mthe two hit limit of the stance."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mflick kit[0m
[37mWith a flick of your wrist you slash a wooden practice sword across Kitai's body.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mflick kit[0m
[37mWith a flick of your wrist you slash a wooden practice sword across Kitai's body.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mflick kit[0m
[37mWith a flick of your wrist you slash a wooden practice sword across Kitai's body.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mdef[0m
[37mYou are in the Wounding stance for 2 more blows.[0m
[37mYou have a single defense.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53msay Three flicks and I still have two hits left on my stance.[0m
[1;36mYou say, "Three flicks and I still have two hits left on my stance."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53msay So I'm going to use that stance for a finisher[0m
[1;36mYou say, "So I'm going to use that stance for a finisher."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mab edgecasting unchain[0m
[37mUNCHAIN[0m
[37mSyntax: UNCHAIN <target>[0m
[37mAttack Type: Closer[0m

[37mUsing your sword as a focus you are able to unleash a destructive burst of arcane energy that will strike at [0m[37myour foe's magical capabilities and defenses.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53mgrin kitai[0m
[37mYou grin at Kitai, amusement showing through your broad smile.[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53msay Here we go[0m
[1;36mYou say, "Here we go."[0m
[37m[H: [1;32m745[0m [37mM: [33m375[37m [1;32m(Wound) [0;37m-eblrg-][0m
[53munchain kitai[0m
[37mYou point a wooden practice sword at Kitai and a burst of arcane energy shoots out to hit him.[0m
[37mThe energy seperates into many darts of light that pierce the wounds on Kitai's body.[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53msay Notice the closer completely removed my stance despite having two hits left, closers always end the stance[0m
[1;36mYou say, "Notice the closer completely removed my stance despite having two hits left, closers always end the [0m[1;36mstance."[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53msay But they give a nice benefit in return, completely dependant on the unique stance-closer combination. [0m[53mWounding stance used with Unchain such as I just did drains mana dependant on how wounded they are, every [0m[53mphysical affliction worsening the mana loss they suffer from it.[0m
[1;36mYou say, "But they give a nice benefit in return, completely dependant on the unique stance-closer [0m[1;36mcombination. Wounding stance used with Unchain such as I just did drains mana dependant on how wounded [0m[1;36mthey are, every physical affliction worsening the mana loss they suffer from it."[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53msay So let's try another full combo of abilities, and then Kitai will have his turn to beat up on me.[0m
[1;36mYou say, "So let's try another full combo of abilities, and then Kitai will have his turn to beat up on me."[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[37mKitai snickers to himself.[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53mab edgecasting aetherslash[0m
[37mAETHERSLASH[0m
[37mSyntax: AETHERSLASH <target>[0m
[37mAttack Type: Opener[0m

[37mBy wreathing your sword in magical power you will deal arcane damage with your blows, and also damage your [0m[37mfoe's mana reserves slightly.[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53mab maiming hamstring[0m
[37mHAMSTRING[0m
[37mSyntax: HAMSTRING <target>[0m
[37mAttack Type: Standard[0m

[37mBy slashing the muscles in the leg you can make it painful for them to use their legs for much of anything. [0m[37mUsing leg balance or walking will cause excrutiating pain.[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53mab maiming traumatize[0m
[37mTRAUMATIZE[0m
[37mSyntax: TRAUMATIZE <target>[0m
[37mAttack Type: Closer[0m

[37mRush the enemy and plunge your blade into them to open up a wound they won't soon be recovering from.[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53msay We'll use those three abilities in order, an opener to get into stance, a standard attack to take [0m[53madvantage of the stance, and then a closer for the combo benefit it provides.[0m
[1;36mYou say, "We'll use those three abilities in order, an opener to get into stance, a standard attack to take [0m[1;36madvantage of the stance, and then a closer for the combo benefit it provides."[0m
[37m[H: [1;32m745[0m [37mM: [33m325[37m -eblrg-][0m
[53maetherslash kit[0m
[37mArcane energy flows around your sword as you slash into Kitai with a wooden practice sword.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m [1;32m(Aether) [0;37m-elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m [1;32m(Aether) [0;37m-eblrg-][0m
[53mhamstring kitai[0m
[37mYou tear Kitai's legs with a wooden practice sword, injuring the muscles.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m [1;32m(Aether) [0;37m-elrg-][0m
[37mKitai drinks from a crystal flask.[0m
[37mThe wounds on Kitai's legs begin to heal.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m [1;32m(Aether) [0;37m-elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m [1;32m(Aether) [0;37m-eblrg-][0m
[37mThe wounds on Kitai's legs have fully healed.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m [1;32m(Aether) [0;37m-eblrg-][0m
[53mtraumatize kitai[0m
[37mYou rush towards Kitai with a wooden practice sword and plunge it into his body, causing a grevious wound.[0m
[37mThe arcane energies from your weapon burn into the wound, giving it a sickly prismatic glow.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -elrg-][0m
[1;32mYou have regained balance.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[53msay First I hit him with the opening attack Aetherslash, so my attacks do Arcane damage and also drain some [0m[53mof his mana on each hit.[0m
[1;36mYou say, "First I hit him with the opening attack Aetherslash, so my attacks do Arcane damage and also drain [0m[1;36msome of his mana on each hit."[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[53msay Then I hamstrung him so moving or using leg balance will hurt, notice that when he starts to heal it, it [0m[53mtakes a couple seconds before being actually healed. Physical afflictions do not just instantly repair [0m[53mthemselves, however none of them are 'hard' afflictions like broken limbs or paralysis that make combat [0m[53mimpossible without curing them.[0m
[1;36mYou say, "Then I hamstrung him so moving or using leg balance will hurt, notice that when he starts to heal [0m[1;36mit, it takes a couple seconds before being actually healed. Physical afflictions do not just instantly [0m[1;36mrepair themselves, however none of them are 'hard' afflictions like broken limbs or paralysis that make [0m[1;36mcombat impossible without curing them."[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[53msay Finally I traumatized him, which has a unique affliction and message for each stance. Aetherslash's [0m[53mtrauma affliction will cause him to take damage every time he loses mana, whether it's from casting or [0m[53mhaving it drained via an attack.[0m
[1;36mYou say, "Finally I traumatized him, which has a unique affliction and message for each stance. Aetherslash's [0m[1;36mtrauma affliction will cause him to take damage every time he loses mana, whether it's from casting or [0m[1;36mhaving it drained via an attack."[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[53msay to kitai Your turn[0m
[1;36mYou say to Kitai, "Your turn."[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[1;36mKitai says, "Ah, about time!"[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[1;36mKitai says, "I'll use one of my favorite combinations then, with abilities from both Weaponry and [0m[1;36mRetaliation."[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[53mweep[0m
[37mYou begin to openly weep.[0m
[37m[H: [1;32m745[0m [37mM: [31m305[37m -eblrg-][0m
[37mKitai rends you with a steel broadsword.[0m
[37m[H: [1;32m715[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 5 health.[0m
[37m[H: [1;32m710[0m [37mM: [31m305[37m -eblrg-][0m
[37mKitai viciously hacks into you with a steel broadsword.[0m
[37m[H: [1;32m678[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 9 health.[0m
[37m[H: [1;32m669[0m [37mM: [31m305[37m -eblrg-][0m
[37mKitai backhands you with a steel broadsword.[0m
[37m[H: [1;32m639[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 16 health.[0m
[37m[H: [1;32m623[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 14 health.[0m
[37m[H: [1;32m609[0m [37mM: [31m305[37m -eblrg-][0m
[37mKitai rends you with a steel broadsword.[0m
[37m[H: [1;32m579[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 17 health.[0m
[37m[H: [1;32m562[0m [37mM: [31m305[37m -eblrg-][0m
[37mKitai viciously hacks into you with a steel broadsword.[0m
[37mKitai strikes a spot on your body unprotected by armor.[0m
[37m[H: [33m524[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 22 health.[0m
[37m[H: [33m502[0m [37mM: [31m305[37m -eblrg-][0m
[37mKitai stabs you with a steel broadsword and twists it viciously.[0m
[37mKitai strikes a spot on your body unprotected by armor.[0m
[37mKitai's weapon twists into one of your bloody wounds, causing your blood to spray out.[0m
[37mYou bleed 45 health.[0m
[37m[H: [33m427[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 22 health.[0m
[37m[H: [33m405[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 20 health.[0m
[37m[H: [33m385[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 18 health.[0m
[37m[H: [33m367[0m [37mM: [31m305[37m -eblrg-][0m
[37mYou bleed 16 health.[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[53mtest bleed 0[0m
[37mYou set your bleeding to 0.[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[1;36mKitai says, "Mmm, the taste of blood..."[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[53msay I'll disable my bleeding there, but as you can see it's a very powerful combo.[0m
[1;36mYou say, "I'll disable my bleeding there, but as you can see it's a very powerful combo."[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[1;36mKitai says, "This combination starts off with doing Rend. This will cause some bleeding damage along with [0m[1;36mputting me into the Rend stance. After this I continue with a Hack, an ability that does more damage if [0m[1;36myour target is having low health, which means it's a great finisher. But of course, it will also add a bit [0m[1;36mmore bleeding due to the stance."[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[1;36mKitai says, "To finish the first rotation, I did a Backhand. This beauty is a closer that will improve the [0m[1;36mbonus of the stance you're in. So as I was in the Rend stance, I did a lot more bleeding damage."[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[1;36mKitai says, "For the next rotation I do the same as before, which was Rend and then Hack. But to top it off [0m[1;36mthis time we do something called Twist. When you're in the Rend stance, it will enhance the damage done if [0m[1;36mthe opponent is bleeding a lot already."[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[53msay As you can see that twist hit me pretty hard, and the extra damage was treated as bleeding, the observant [0m[53mwill probably be able to guess the relationship between how much I'm bleeding and how much the rend-twist [0m[53mhit me for extra. [0m
[1;36mYou say, "As you can see that twist hit me pretty hard, and the extra damage was treated as bleeding, the [0m[1;36mobservant will probably be able to guess the relationship between how much I'm bleeding and how much the [0m[1;36mrend-twist hit me for extra."[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[53msay All the abilities used in this demonstration and stance combos for them (including ones not shown) are [0m[53mavailable on our forums. As well as details of the skill system and the Towerguard from what they can [0m[53mlearn to the lore behind them.[0m
[1;36mYou say, "All the abilities used in this demonstration and stance combos for them (including ones not shown) [0m[1;36mare available on our forums. As well as details of the skill system and the Towerguard from what they can [0m[1;36mlearn to the lore behind them."[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[53msay And tune in next week for a preview of the Arcanist![0m
[1;36mYou say, "And tune in next week for a preview of the Arcanist!"[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[37mKalenar gestures at you and incants a long string of magical syllables.[0m
[37mKalenar surrounds himself with whirling bars of solid multi-colored light.[0m
[37mYour thoughts grow hazy, splintering into chaos.[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[53msay They're here![0m
[37mHuh?[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -blrg-][0m
[1;33mYou have regained equilibrium.[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
[53msay Run![0m
[1;36mYou say, "Run!"[0m
[37m[H: [33m351[0m [37mM: [31m305[37m -eblrg-][0m
