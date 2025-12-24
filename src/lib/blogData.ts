export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string;
      list?: string[];
    }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'party-tent-services-for-weddings-and-summer-events',
    title: 'Party Tent Services for Weddings and Summer Events',
    excerpt: 'Though COVID-19 has put many events on hold, with lifted restrictions right around the corner, it\'s time to reconsider summer plans.',
    category: 'Events',
    date: 'September 7, 2023',
    image: 'https://ext.same-assets.com/1191166484/1923043068.jpeg',
    content: {
      intro: 'Though COVID-19 has put many events on hold, with lifted restrictions right around the corner, it\'s time to reconsider summer plans.\n\nPeople can\'t wait to go out, socialize and put the past year firmly behind them - and what better way to do so than by hosting events in the great outdoors? Whether you want to take advantage of the changing weather or would like to showcase a jaw-dropping view, any outdoor gathering needs a party tent to help bring everything together.\n\nWe can help you find great solutions for any event, here\'s how!',
      sections: [
        {
          heading: 'Worry-Free Weather',
          content: 'The weather is normally uncontrollable, but party tents can shield your party from the wind, rain and even excessive sunlight.\n\nEven if you\'re expecting perfect weather, sometimes tents and awnings get dirty. Instead of grabbing the nearest ladder and bucket, you can rely on us for efficient cleaning services. Everything will look spotless and ready to go for the next event thanks to our party tent cleaning offer.'
        },
        {
          heading: 'Personalized Design',
          content: 'Picking the right tent will instantly change the atmosphere of your party whether you\'re looking for something classy or modern. Party tent manufacturing is in our wheelhouse which is why we can offer you precisely what you need.\n\nThanks to our awning manufacturing services, we can also provide awnings that will help blend in with the tent you\'ve chosen, giving an area a stylish and cohesive look.'
        },
        {
          heading: 'Unlimited Uses',
          content: 'You can also make the most out of your tent with our party tent assessment services.\n\nThese will ensure that your tent is up to standards at all times. By being proactive, you\'ll also know if you\'ll need a replacement in the near future, significantly reducing downtime. Couple this with an awning assessment to ensure longevity across all products.\n\nSo, if you\'re ready to start exploring options in time for the boom of summer parties and weddings that are nearly upon us, contact us and we\'ll help you figure out the best approach to your event planning!'
        }
      ]
    }
  },
  {
    id: 2,
    slug: 'how-to-choose-the-right-awning',
    title: 'How to Choose The Right Awning',
    excerpt: 'Choosing the right awning for your business might seem simple, but it\'s a decision that goes beyond design.',
    category: 'Awning Maintenance',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/2873393069.false',
    content: {
      intro: 'Choosing the right awning for your business might seem simple, but it\'s a decision that goes beyond design. The right awning can elevate your building\'s appearance, enhance visibility, and even provide practical benefits like weather protection. To make the best choice, it\'s crucial to consider your specific needs and future growth. And with the right partners, the process can be much smoother.',
      sections: [
        {
          heading: 'Function',
          content: 'What\'s the purpose behind your investment in an awning? Understanding this will guide your decision. Here are some key reasons businesses choose to invest in awnings:',
          list: [
            'Updating the look of your building',
            'Enhancing your business\'s visibility by branding your location',
            'Providing protection from the sun or rain for customers',
            'Shading windows and doors to reduce cooling costs',
            'Expanding restaurant seating with a stylish outdoor space'
          ]
        },
        {
          heading: 'Growth',
          content: 'Awnings offer more than just aesthetic appeal—they\'re practical, too. Whether you need to shelter customers from the elements or make your business stand out, an awning is a versatile solution that can serve many purposes.\n\nThink about your company\'s growth trajectory. You might start with an awning over your entrance to create a professional, inviting look for customers as they walk in. But as your business grows, you might want to add more awnings over windows, offering additional branding opportunities and increasing your building\'s overall appeal. Planning for growth now can save you time and money later.'
        },
        {
          heading: 'Design',
          content: 'This is where your creativity can truly shine. Awnings come in a variety of designs, each offering unique benefits:',
          list: [
            'Retractable awnings for maximum flexibility',
            'Standard awnings with or without a valance for a classic look',
            'Dome awnings to enhance your building\'s architectural lines',
            'Quarter-round or waterfall-style awnings that provide space for exterior lighting or security cameras'
          ]
        },
        {
          heading: 'Let\'s Get Started',
          content: 'Your awning should be a reflection of your brand. The right design will not only look great but also function effectively, contributing to your business\'s success.\n\nWith all these factors in mind, it\'s time to take the next step. At AwnGuard, we\'re here to guide you through the process, helping you find the perfect awning solution that meets your business needs. Give us a call, and let\'s create something great together!'
        }
      ]
    }
  },
  {
    id: 3,
    slug: 'party-tents-for-outdoor-events',
    title: 'Party Tents for Outdoor Events',
    excerpt: 'Preserve your party tent with proper maintenance and cleaning services.',
    category: 'Events',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/3404599814.false',
    content: {
      intro: 'Whether you want to take advantage of the changing weather or would like to showcase a jaw-dropping view, a party tent can be a great addition to your outdoor space. Canopies and tents can be manufactured in many shapes and sizes, providing a shield from wind, rain, heat and the sun, as well as helping to create an intimate and inviting space for your guests.',
      sections: [
        {
          heading: 'Preserve Your Party Tent',
          content: 'If you already have a tent, you know the importance of keeping it clean and well-maintained. Instead of grabbing the nearest ladder and bucket, partnering with a professional service company to regularly clean it efficiently will help keep your tent looking flawless, and prolong its life for years to come. AwnGuard is that partner in the Southern California region.\n\nContact us for a quote.'
        }
      ]
    }
  },
  {
    id: 4,
    slug: 'outdoor-solutions-for-businesses',
    title: 'Outdoor Solutions for Businesses Post-Pandemic',
    excerpt: 'We\'re nearing the end of the coronavirus pandemic, but we\'re not out of the woods. That\'s why businesses need to rethink their overall strategies.',
    category: 'Business Tips',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/676812335.false',
    content: {
      intro: 'We\'re nearing the end of the coronavirus pandemic, but we\'re not out of the woods. That\'s why businesses need to rethink their overall strategies in order to stay afloat. As restrictions lift and the weather is changing, it\'s time to talk about how you can take advantage of your outdoor space if you haven\'t already.\n\nAwnings will give your brick-and-mortar business a much-needed facelift, which is why you should consider getting them as part of your re-opening marketing strategy.\n\nIn terms of awning solutions, here are a few things to keep in mind.',
      sections: [
        {
          heading: 'Advertise Your Business',
          content: 'Awnings are a great way to spruce up your storefront, but you can take it one step further and advertise your business so that potential customers have a better chance to see you from afar.\n\nThey can showcase your business\' name, logo, and even a call to action. We can help you create the perfect design that will blend into the surrounding area effortlessly without sacrificing your visibility.'
        },
        {
          heading: 'Take Advantage of Outdoor Seating',
          content: 'While outdoor seating is usually reserved for restaurants and cafes, any business can take advantage of this. You\'ll shield your customers from the rain and sun, making their visit more enjoyable.\n\nAfter you\'re done installing your awning, we can also offer cleaning services in order to ensure that your outdoor area is in perfect condition all year round.'
        },
        {
          heading: 'Provide Long-term Protection',
          content: 'Outdoor furniture is less likely to get damaged over time with a little help. The same goes for indoor furniture, especially if it\'s close to the windows. Awnings can provide longevity to your items and investments.\n\nPeriodic awning assessments will provide you peace of mind, too. We\'ll assess the fabric and structure of your awning so that your business won\'t be taken by surprise by potential issues.\n\nPost-pandemic, it\'s important for all businesses to re-evaluate how they\'ll attract new customers, and awnings are versatile solutions that we can help you out with if you <a href="/contact">give us a call</a>!'
        }
      ]
    }
  },
  {
    id: 5,
    slug: 'awning-designs-guide',
    title: 'A Guide to Awning Designs for Businesses',
    excerpt: 'Depending on location, brick-and-mortar stores can face a lot of challenges. The competition up and down the block may be fierce.',
    category: 'Awning Maintenance',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/1685503905.jpeg',
    content: {
      intro: 'Depending on location, brick-and-mortar stores can face a lot of challenges. The competition up and down the block may be fierce, which is why business owners must consider all their options when it comes to attracting customers.\n\nAwnings, for example, are great for any type of business. Not only are they extremely versatile, but they can provide various functions depending on your needs.',
      sections: [
        {
          heading: 'Awning Design',
          content: 'Give your business the chance to stand out by installing a custom-made awning. Your awning design can have a huge impact on your visibility. From the color to the shape of your awning, you can pick from a myriad of options that will make your business look more stylish while also providing crucial information for potential customers.\n\nHere, we\'re talking about your phone number, operating hours, and even your logo. All of these elements can come together to create a cohesive image of what customers can expect once they step inside your business.'
        },
        {
          heading: 'Building Facade',
          content: 'Awnings aren\'t just used to communicate what your business is about, they can also make your building look different. A boring exterior can be transformed immediately with the right type of design.\n\nNot only that, awnings can make any space look bigger. Awning specialists can help you pick the right shape, height, and slope that can make any storefront appear wider or taller.'
        },
        {
          heading: 'Functionality',
          content: 'Originally, awnings were created to offer shade and protection from the elements, such as rain. Your new awning, while stylish, will provide the same benefits. For restaurants, they can expand your seating area, allowing diners to enjoy their meals out in the open without discomfort.\n\nSome may even be retractable or seasonal- we really did mean it when we said that the possibilities are endless!\n\nBefore the awning installation process can even begin, contact us so that we may help you pick the perfect design for your business!'
        }
      ]
    }
  },
  {
    id: 6,
    slug: 'los-willows-oceanside',
    title: 'Los Willows – Oceanside and Fallbrook Locations',
    excerpt: 'Los Willows B&B is now ready for \'White Weddings\'. This popular event venue for weddings and other special events.',
    category: 'Case Studies',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/1464963876.jpeg',
    content: {
      intro: 'Los Willows B&B, a premier wedding and event venue with locations in Oceanside and Fallbrook, California, hosts over 100 special events each year. Their spectacular grounds and amenities create the perfect backdrop for memorable occasions, but maintaining pristine awnings and event tents is essential to match the venue\'s prestige.',
      sections: []
    }
  },
  {
    id: 7,
    slug: 'j-s-t-real-estate-services',
    title: 'J.S.T. Real Estate Services',
    excerpt: 'Customer since 2010 - "You guys are always easy to work with and dependable."',
    category: 'Case Studies',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/4106557211.jpeg',
    content: {
      intro: 'J.S.T. Real Estate Services has been a valued AwnGuard customer since 2010, representing one of our longest-standing partnerships in commercial property management. Their trust in our services demonstrates the quality and reliability we bring to every project.',
      sections: [
        {
          heading: 'Customer Since 2010',
          content: '"You guys are always easy to work with and dependable and while price is important it\'s not always the most important thing. We like working with you."\n\n<strong>Steve Tirittili</strong><br/>Sr Property Manager<br/>J.S.T. Real Estate Services'
        }
      ]
    }
  },
  {
    id: 8,
    slug: 'boardwalk-development-inc',
    title: 'Boardwalk Development, Inc.',
    excerpt: 'Customer since 2003 - "You guys do a great job. There\'s no reason to switch."',
    category: 'Case Studies',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/3280702032.false',
    content: {
      intro: 'Boardwalk Development, Inc. has been a loyal AwnGuard customer since 2003, representing over two decades of trust and exceptional service. Their continued partnership exemplifies the long-term relationships we build with our commercial property clients.',
      sections: [
        {
          heading: 'Customer Since 2003',
          content: '"You guys do a great job. There\'s no reason to switch."\n\n<strong>Phil Ladman</strong><br/>Property Manager<br/>Boardwalk Development, Inc.'
        }
      ]
    }
  },
  {
    id: 9,
    slug: 'sudberry-properties',
    title: 'Sudberry Properties',
    excerpt: 'Customer since 2001 - "You do a great job; you call ahead which works out great for us. Your guys do a great job, we really appreciated you service."',
    category: 'Case Studies',
    date: '',
    image: 'https://ext.same-assets.com/1191166484/1591979662.jpeg',
    content: {
      intro: 'Sudberry Properties has been a valued AwnGuard customer since 2001, representing over two decades of trust and exceptional service. Their continued partnership demonstrates the quality and reliability we bring to commercial property management.',
      sections: [
        {
          heading: 'Customer Since 2001',
          content: '"You do a great job; you call ahead which works out great for us. Your guys do a great job, we really appreciated you service."\n\n<strong>Diana Lawlesss</strong><br/>Sr Property Manager – Sudberry Properties'
        }
      ]
    }
  },
  {
    id: 10,
    slug: 'encinitas-ca-arbor-center',
    title: 'Encinitas, CA: Arbor Center',
    excerpt: 'Customer since 2003 - "You just clean awnings for us and you do a great job!"',
    category: 'Case Studies',
    date: 'November 10, 2025',
    image: 'https://ext.same-assets.com/1191166484/3435917382.false',
    content: {
      intro: 'Arbor Center in Encinitas has been a valued AwnGuard customer since 2003, representing over two decades of trust and exceptional awning cleaning service. Their continued partnership demonstrates the quality and reliability we bring to commercial property management.',
      sections: [
        {
          heading: 'Customer Since 2003',
          content: '"You just clean awnings for us and you do a great job!"\n\n<strong>Dave Sondag</strong><br/>Property Manager<br/>DAS Property Management'
        }
      ]
    }
  },
  {
    id: 11,
    slug: 'carlsbad-ca-tower-37',
    title: 'Carlsbad, CA: Tower 37',
    excerpt: 'Customer since 2013 - "I\'m glad you are our awning cleaners. We love you guys. We love working with a local small business."',
    category: 'Case Studies',
    date: 'November 11, 2025',
    image: 'https://ext.same-assets.com/1191166484/1933892895.false',
    content: {
      intro: 'Tower 37 in Carlsbad has been a valued AwnGuard customer since 2013, representing over a decade of trust and exceptional awning cleaning service. Their continued partnership demonstrates the quality and reliability we bring to commercial property management and local small businesses.',
      sections: [
        {
          heading: 'Customer Since 2013',
          content: '"I\'m glad you are our awning cleaners. We love you guys. We love working with a local small business."\n\n<strong>Allie Dixon</strong><br/>Property Manager<br/>Madfi, LLC'
        }
      ]
    }
  },
  {
    id: 12,
    slug: 'pride-property-services',
    title: 'Pride Property Services',
    excerpt: 'Customer since 2011 - "You\'ve always been great to work with. You\'ve done a great job since day one – no complaints. You always remind us when it\'s time to clean."',
    category: 'Case Studies',
    date: 'November 12, 2025',
    image: 'https://ext.same-assets.com/1191166484/1659056772.jpeg',
    content: {
      intro: 'Pride Property Services has been a valued AwnGuard customer since 2011, representing over a decade of trust and exceptional awning cleaning service. Their continued partnership demonstrates the quality, reliability, and proactive customer service we bring to commercial property management.',
      sections: [
        {
          heading: 'Customer Since 2011',
          content: '"You\'ve always been great to work with. You\'ve done a great job since day one – no complaints. You always remind us when it\'s time to clean."\n\n<strong>Ross Melodia</strong><br/>Property Manager'
        }
      ]
    }
  },
  {
    id: 13,
    slug: 'encinitas-ca-101-diner',
    title: 'Encinitas, CA: 101 Diner',
    excerpt: 'Customer since 2001 - "Your service is very good. You do a good job cleaning, it improves the life span of the awnings and you point out potential problems."',
    category: 'Case Studies',
    date: 'November 13, 2025',
    image: 'https://ext.same-assets.com/1191166484/1366211048.jpeg',
    content: {
      intro: 'The 101 Diner in Encinitas has been a valued AwnGuard customer since 2001, representing over two decades of trust and exceptional awning cleaning service. This iconic local establishment with its classic red awning has maintained its pristine appearance thanks to our comprehensive awning maintenance and inspection services.',
      sections: [
        {
          heading: 'Customer Since 2001',
          content: '"Your service is very good. One of the braces was loose, thank you for pointing it out to us. You do a good job cleaning, it improves the life span of the awnings and you point out potential problems. It\'s a good service you do."\n\n<strong>George Goland</strong><br/>Building Landlord'
        }
      ]
    }
  },
  {
    id: 14,
    slug: 'target-center-h-mart-center',
    title: 'San Diego, CA: Target Ctr / H. Mart Ctr',
    excerpt: 'Customer since 2010 - "You guys do an outstanding job!"',
    category: 'Case Studies',
    date: 'November 14, 2025',
    image: 'https://ext.same-assets.com/1191166484/3714938173.jpeg',
    content: {
      intro: 'The Mira Mesa Shopping Centers in San Diego have been valued AwnGuard customers since 2010, representing over a decade of trust and outstanding awning cleaning service. This bustling shopping complex, featuring stores like RadioShack and H Mart with their distinctive teal awnings, maintains a professional and inviting appearance for shoppers thanks to our comprehensive commercial awning maintenance services.',
      sections: [
        {
          heading: 'Customer Since 2010',
          content: '"You guys do an outstanding job!"\n\n<strong>Chris Schlosser</strong><br/>Property Manager<br/>Mira Mesa Shopping Center West/Mira Mesa Shopping Center East'
        }
      ]
    }
  },
  {
    id: 15,
    slug: 'city-of-escondido',
    title: 'City of Escondido',
    excerpt: 'Customer since 2002 - "Awn-Guard has been a highly reliable company to us. You are a valuable tool in my arsenal of different needs for the Division."',
    category: 'Case Studies',
    date: 'November 15, 2025',
    image: 'https://ext.same-assets.com/1191166484/821499607.jpeg',
    content: {
      intro: 'The City of Escondido has been a valued AwnGuard customer since 2002, representing over two decades of partnership serving municipal facilities. This government partnership demonstrates our ability to provide reliable, professional awning maintenance services for public buildings, including recreation centers with distinctive teal awnings featuring sports graphics.',
      sections: [
        {
          heading: 'Customer Since 2002',
          content: '"Good to know that you are expanding your service. Awn-Guard has been a highly reliable company to us and I appreciate that a lot. As always you are a valuable tool in my arsenal of different needs for the Division. As in improvement, just keep doing the awesome service you provide!!\n\nHave a great day and rest of the week!"\n\n<strong>Ira C Morgan II</strong><br/>Building Maintenance Superintendent<br/>City of Escondido'
        }
      ]
    }
  },
  {
    id: 16,
    slug: 'happy-thanksgiving',
    title: 'Happy Thanksgiving',
    excerpt: 'Thanksgiving at its best is an altruistic & pure holiday. A time to be thankful for everything, through the Good, the Bad, and the Ugly.',
    category: 'Business Tips',
    date: 'November 16, 2025',
    image: 'https://ext.same-assets.com/1191166484/2028958286.jpeg',
    content: {
      intro: 'Thanksgiving at it\'s best is an altruistic & pure holiday. It is a feeling of fullness, not only of the body, but also the soul. When life\'s events feel out of control, go with the flow. Be thankful for...everything.',
      sections: [
        {
          heading: 'Happy Thanksgiving',
          content: 'Wishing you the "Good";\n\nunderstanding when life seems "bad" and\n\nready to laugh with you through the "Ugly"\n\n<div style="margin-top: 20px;"><img src="https://ext.same-assets.com/1191166484/1725414393.gif" alt="When the going is Good, it\'s easy to be thankful. When it\'s bad, we search for meaning; the lesson, a silver lining. Sometimes this works. When it\'s just plain Ugly, sometimes we have to turn around to see the blessings we have passed by unaware in our unwavering focus toward... whatever. Maybe the \'ugly\' gives us a chance to change course & depart from what doesn\'t work in our lives. This departure is truly something we can be thankful for." style="max-width: 100%; height: auto;" /></div>'
        }
      ]
    }
  },
  {
    id: 17,
    slug: 'capital-growth-properties',
    title: 'Capital Growth Properties',
    excerpt: 'Customer since 2002 - "I like the fact that I don\'t have to think, you just get the job done. It\'s a beautiful thing."',
    category: 'Case Studies',
    date: 'November 17, 2025',
    image: 'https://ext.same-assets.com/1191166484/213555508.jpeg',
    content: {
      intro: 'Capital Growth Properties has been a valued AwnGuard customer since 2002, representing over two decades of trust and hassle-free awning maintenance service. This commercial property management company appreciates the peace of mind that comes from working with a reliable partner who consistently delivers quality results without requiring constant oversight.',
      sections: [
        {
          heading: 'Customer Since 2002',
          content: '"I like the fact that I don\'t have to think, you (AwnGuard) just get the job done. It\'s a beautiful thing."\n\n<strong>Mary Murphy Rice</strong><br/>Senior Property Manager<br/>Capital Growth Properties, Inc.\n\n<div style="margin-top: 30px;">"I think you guys are spot on. I think you guys do a good job"</div>\n\n<strong>Abigail Rex</strong><br/>Property Manager<br/>Capital Growth Properties, Inc.'
        }
      ]
    }
  },
  {
    id: 18,
    slug: 'farewell-db-auto',
    title: 'Solana Beach, CA: D&B Auto - A Fond Farewell',
    excerpt: 'Saying goodbye to a loyal customer since 2002. "Doing business with your company has been trouble free and we have enjoyed it."',
    category: 'Case Studies',
    date: 'December 31, 2015',
    image: 'https://ext.same-assets.com/1191166484/3679374088.jpeg',
    content: {
      intro: 'It is with sadness that we say our goodbyes to D&B Auto. D&B have announced their closure as of December 31, 2015. Awn-Guard has had the pleasure of serving D&B for over a decade, starting services in October 2002. They will certainly be missed by the Solana Beach Community and by us.',
      sections: [
        {
          heading: 'Thank You For Your Years of Loyalty',
          content: '"Doing business with your company has been trouble free and we have enjoyed it. Thank you for your services."\n\n<strong>– Sincerely, Barbara Smith</strong><br/>D&B Auto, Solana Beach\n\n<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #8ca5b4;"><em>D&B Auto was a valued customer from October 2002 to December 2015, representing over 13 years of partnership. We are grateful for the opportunity to have served this local Solana Beach business and wish them well in their future endeavors.</em></div>'
        }
      ]
    }
  },
  {
    id: 19,
    slug: 'valentines-day-here-again',
    title: 'Valentine\'s Day, Here Again',
    excerpt: 'Valentine reflections from Dawn Wood and the AwnGuard team. A day for a little extra acknowledgement to tell the people you care about that you... well... care about them.',
    category: 'Business Tips',
    date: 'February 14, 2016',
    image: 'https://ext.same-assets.com/1191166484/3399339703.false',
    content: {
      intro: 'So this week I\'ve been thinking about Valentine\'s Day (a personal favorite of mine since it is my mother\'s birthday.) I have heard other people sometimes grumble about consumerism, guilt-trip dates & way too much pressure to be especially romantic. I for the most part have ignored such sentiments since my experience with Valentine\'s Day was primarily making lots of homemade cards for my school friends, and then making lots of homemade cards for my children\'s school friends. We are up to 62 valentines. As a rule, we never bought greeting cards or other trinkets with the exception of birthday presents for mom. The romantic side of the holiday rarely came up in my youth – but I did like the general willingness of people to get into a more "loving" space in their lives. It was a nice holiday, not bogged down with religious ideologies, or nationalistic movements.',
      sections: [
        {
          heading: 'Valentine Reflections',
          content: 'The notion of romanticism briefly entered my consciousness when my brother proposed to my now sister-in-law on Valentine\'s Day, but honestly, I did not dwell with this as the happy news grossly overshadowed the when, how and why.\n\nThis week, as we make our plethora of Valentines, I have had several conversations with fans & hold-outs of Valentine\'s Day. The fans and I speak the same language –it\'s all fuzzy, fuzzy warm feelings and doily, homemade greeting cards. Valentine\'s Day is a holiday where my inclination for poetry is perfectly suited. The foes of the day, I think put way too much stock into the "grand gesture". I can assure you this is in no way required. It is instead, just a day for a little extra acknowledgement to tell the people you care about in your life that you... well... care about them. Hopefully in a bit of a creative way.'
        },
        {
          heading: 'Happy Valentine\'s Day',
          content: '<strong>Dawn Wood & the entire AwnGuard team</strong>'
        }
      ]
    }
  },
  {
    id: 20,
    slug: 'hotel-bel-air',
    title: 'Hotel Bel Air',
    excerpt: 'Luxury 5-star hotel partnership - "The quality of work, ease of scheduling, and follow through is what sets them apart. Awn-Guard are great partners in helping Hotel Bel-Air look its best!"',
    category: 'Case Studies',
    date: 'January 15, 2016',
    image: 'https://ext.same-assets.com/1191166484/2819954756.jpeg',
    content: {
      intro: 'Hotel Bel Air, nestled in beautiful Stone Canyon provides guests with a luxurious getaway. Lush gardens and numerous paths meander over small streams and under covered bridges, make the property truly memorable. Incredible pool facilities and full service on site spa complete the 5 star experience. Hotel Bel Air is just a short half hour drive to Santa Monica Beach or upscale shopping in Beverly Hills.',
      sections: [
        {
          heading: 'A Great Partnership Over 1½ Years',
          content: '"Since using AwnGuard over the last 1½ years, we have formed a great partnership and work very smoothly together. They are always willing to work together with us on different tasks, they follow through, do a great quality of work and are easy to coordinate with. When challenges arose, albeit very few, AwnGuard was very flexible and professional in making it right. The quality of work, ease of scheduling, and follow through is what sets them apart. Awn-Guard are great partners in helping Hotel Bel-Air look its best!"\n\n<strong>David McCleery</strong><br/>Director of Housekeeping<br/>Hotel Bel Air'
        }
      ]
    }
  },
  {
    id: 21,
    slug: 'juniper-furniture-home-accessories',
    title: 'Little India, San Diego: Juniper Furniture & Home Accessories - A Fond Farewell',
    excerpt: '"My awning is less faded than the paint on my building. If I ever have another awning, I will definitely use AwnGuard again."',
    category: 'Case Studies',
    date: 'December 15, 2015',
    image: 'https://ext.same-assets.com/1191166484/1955038895.jpeg',
    content: {
      intro: 'AwnGuard would like to thank Juniper Furniture & Home Accessories for their many years of loyalty. Brooke Daniels has decided to close her home store in Little Italy after a glorious 14 year run. For 10 of those years, Awn-Guard has had the pleasure of keeping the Juniper storefront looking its best.',
      sections: [
        {
          heading: 'A Decade of Excellence',
          content: '"AwnGuard has been cleaning and maintaining my awning for over a decade. When I look down the street – it is obvious who has invested in proper maintenance. Stores with neglected awnings look faded and dirty while mine still looks awesome. My awning is less faded than the paint on my building. If I ever have another awning, I will definitely use AwnGuard again."\n\n<strong>– Brook Daniel</strong><br/>Owner, Juniper Furniture & Home Accessories\n\n<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #8ca5b4;"><em>Juniper Furniture & Home Accessories served Little Italy, San Diego for 14 wonderful years. AwnGuard was honored to maintain their storefront for 10 of those years, demonstrating the visible difference that professional awning care makes for retail businesses.</em></div>'
        }
      ]
    }
  },
  {
    id: 22,
    slug: 'theres-more-than-one-way-to-stand-out',
    title: 'There\'s More Than One Way to Stand Out!',
    excerpt: 'First impressions matter. Don\'t overlook your awnings - routine awning maintenance is an important part of a sparkling facade.',
    category: 'Awning Maintenance',
    date: 'November 10, 2015',
    image: 'https://ext.same-assets.com/1191166484/605617135.jpeg',
    content: {
      intro: 'A first impression is made after only a few seconds in our subconscious mind. Our brain takes snapshots of a scene and then draws a composite crafting our first impression. This is happening all the time: when we meet a new person, how we feel about an advertisement, when we are shopping and picking a restaurant.',
      sections: [
        {
          heading: 'The Power of First Impressions',
          content: 'You would never allow a tray of cigarette butts to adorn your door, or let a car become encased in bird droppings in your entrance. Don\'t overlook your awnings either. Routine awning maintenance is an important part of a sparkling facade and cleaning extends the usable life of awning fabric by removing airborne pollutants and bird droppings.\n\n<div style="margin-top: 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">\n  <img src="https://ext.same-assets.com/1191166484/1694570754.jpeg" alt="Dirty cigarette butts on ground" style="width: 100%; border-radius: 8px;" />\n  <img src="https://ext.same-assets.com/1191166484/1177703982.jpeg" alt="Cigarette butts close-up" style="width: 100%; border-radius: 8px;" />\n  <img src="https://ext.same-assets.com/1191166484/3623341969.jpeg" alt="Bird droppings on car" style="width: 100%; border-radius: 8px;" />\n  <img src="https://ext.same-assets.com/1191166484/305859191.jpeg" alt="Clean storefront with purple lighting" style="width: 100%; border-radius: 8px;" />\n</div>'
        },
        {
          heading: 'Stand Out Excellently',
          content: 'Let AwnGuard help you stand out excellently. Let us help your customer have a delightful, memorable first impression.\n\nRegular awning cleaning ensures your business always makes the best impression possible, showing customers you care about every detail of their experience.'
        }
      ]
    }
  },
  {
    id: 23,
    slug: 'rain-wont-clean-your-awning',
    title: 'Rain Won\'t Clean Your Awning',
    excerpt: 'Rain cleans fabric about as well as it cleans a dirty car. Professional awning cleaning lengthens the useable life of awning fabric and improves storefront appearance.',
    category: 'Awning Maintenance',
    date: 'October 15, 2015',
    image: 'https://ext.same-assets.com/1191166484/727494273.false',
    content: {
      intro: 'I hear all the time, especially around winter storm season – how the rain will clean the awnings. Rain cleans fabric about as well as it cleans a dirty car. These before pictures were taken after the heavy rain storms in San Diego. Fabric that is not taken care of on a regular cleaning cycle, is likely to develop mold and mildew staining; especially during wet weather.',
      sections: [
        {
          heading: 'The Problem',
          content: 'Heavy build up of dirt from nearby airfield, busy commercial thoroughfare and years of not cleaning. The awnings were installed to provide needed shade to showrooms and add character to the shopping center but are now detracting from the image of the center due to their unkempt appearance.'
        },
        {
          heading: 'The Solution',
          content: 'Quarterly professional awning cleaning service.\n\nNot only does professional awning cleaning lengthen the useable life of awning fabric, but it also improves the overall appearance of storefronts.\n\n<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #8ca5b4;"><strong>Key Takeaway:</strong> Rain simply won\'t clean your awnings effectively. Regular professional maintenance prevents mold and mildew staining, especially in wet weather, while extending fabric life and maintaining your property\'s professional appearance.</div>'
        }
      ]
    }
  },
  {
    id: 24,
    slug: 'our-changing-team',
    title: 'Our Changing Team',
    excerpt: 'Farewell to Jan Forest and welcoming Mary Rearick to the AwnGuard family. Meet our new back office operations lead.',
    category: 'Business Tips',
    date: 'May 15, 2015',
    image: 'https://ext.same-assets.com/1191166484/3688608425.false',
    content: {
      intro: 'This past spring we bid farewell to Jan Forest who\'s path was taking her step by step to live in Colorado. While we will miss Jan, we are pleased to introduce Mary Rearick who has taken over Jan\'s responsibilities along with a few new ones.',
      sections: [
        {
          heading: 'Welcoming Mary Rearick',
          content: 'Mary has been with us since February. She has quickly made herself indispensable. AwnGuard is truly fortunate to have such a high caliber person moving into the lead in our back office operations. If you have the pleasure of speaking with her, feel free to pass on an "attaboy" from us.\n\n<div style="text-align: center; margin-top: 20px;"><img src="https://ext.same-assets.com/1191166484/3713386457.false" alt="Mary Rearick" style="max-width: 400px; width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" /></div>\n\n<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #8ca5b4;"><strong>Team Update:</strong> While change can be bittersweet, we\'re excited about the new energy and expertise Mary brings to AwnGuard. Our commitment to exceptional customer service continues stronger than ever.</div>'
        }
      ]
    }
  },
  {
    id: 25,
    slug: 'oceanside-ca-applebees',
    title: 'Oceanside, CA: Applebee\'s',
    excerpt: 'AwnGuard has had the pleasure of serving many Applebee\'s locations for over a decade. Read about our outstanding service at their Oceanside location.',
    category: 'Case Studies',
    date: 'April 20, 2015',
    image: 'https://ext.same-assets.com/1191166484/746053930.jpeg',
    content: {
      intro: 'AwnGuard has had the pleasure of serving many Applebee\'s locations for over a decade. Our commitment to quality service and professionalism has made us a trusted partner for maintaining their storefront appearance.',
      sections: [
        {
          heading: 'Client Testimonial',
          content: '"Thank you so much for getting out here on such a short notice and getting everything done on time before our audit! It was noticeably better the moment we saw your work completed and it is just great. We really appreciate the professionalism of your staff and we could not be happier with AwnGuard. We are glad we chose you!"\n\n<div style="text-align: right; margin-top: 15px; font-style: italic; color: #666;">— Shannon Cox, GM<br/>Applebee\'s Oceanside, CA</div>\n\n<div style="text-align: center; margin-top: 30px;"><img src="https://ext.same-assets.com/1191166484/3297450381.jpeg" alt="Applebee\'s Oceanside storefront at night" style="max-width: 500px; width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);\" /></div>'
        },
        {
          heading: 'Our Commitment',
          content: 'This testimonial exemplifies what AwnGuard stands for: responsive service, quality workmanship, and professional staff. When businesses need urgent cleaning services before important events like audits, we\'re ready to deliver exceptional results on short notice.\n\n<div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #8ca5b4;"><strong>Why Businesses Choose AwnGuard:</strong> Fast response times, professional staff, quality results, and over a decade of experience serving major restaurant chains across California.</div>'
        }
      ]
    }
  }
];

export const categories = ['All', 'Awning Maintenance', 'Solar Panel Care', 'Events', 'Business Tips', 'Case Studies'];
