var people = [
    {id: "p-129702656418643968", name: "Gianni"},
    {id: "p-185307556032413697", name: "Sundeep Charan Ramkumar"},
    {id: "p-208321561982271489", name: "penguin"},
    {id: "p-222844791744888832", name: "scottrepreneur"},
    {id: "p-262323994936475649", name: "UniverseCEO"},
    {id: "p-286245796289052673", name: "NickBoyadjian"},
    {id: "p-287768540847800320", name: "plor"},
    {id: "p-303278071174266883", name: "Max"},
    {id: "p-409930721059405835", name: "joshsdoug"},
    {id: "p-433629219898130435", name: "Delleon"},
    {id: "p-435541241795444737", name: "dekanbro"},
    {id: "p-505789102222737420", name: "Saimano"},
    {id: "p-523401372188540939", name: "markop"},
    {id: "p-679156502220636200", name: "Bau"},
    {id: "p-703688028639461386", name: "mprime"},
    {id: "p-707877605025644586", name: "DAO Jones"},
    {id: "p-715073251696705618", name: "dan13ram"},
    {id: "p-775464119037067285", name: "DamagedGoods"},
    {id: "p-795881317619335209", name: "CassStoughton"},
]

var skills = [
    {id: "s-831556065052852224", name: "python"},
    {id: "s-831556687391359016", name: "internet_protocols"},
    {id: "s-831556710702907433", name: "operating_systems"},
    {id: "s-831556826981597186", name: "p2p_protocols"},
    {id: "s-831556866122448916", name: "security"},
    {id: "s-831556922632699955", name: "consensus_protocols"},
    {id: "s-831557017674973214", name: "dependable_systems"},
    {id: "s-831557121643905025", name: "c_and_c_plus_plus"},
    {id: "s-831557145907560458", name: "search_and_recommendations"},
    {id: "s-831557254347096136", name: "devops"},
    {id: "s-831557300409860106", name: "big_data_pipelines"},
    {id: "s-831557343954206791", name: "cloud_infrastructure"},
    {id: "s-831557469809541142", name: "groupware"},
    {id: "s-831557520556032031", name: "web3"},
    {id: "s-831561301938667520", name: "react"},
    {id: "s-831561372491841577", name: "typescript"},
    {id: "s-831561435104542760", name: "node_js"},
    {id: "s-831565192282112046", name: "graphic_design"},
    {id: "s-831565297998757998", name: "branding"},
    {id: "s-832734043270283275", name: "sound_synthesis"},
    {id: "s-833448406742597722", name: "scribe"},
    {id: "s-833448906196254811", name: "bus_dev"},
    {id: "s-833449137575821312", name: "product_design"},
    {id: "s-833449267758104596", name: "usability_testing"},
    {id: "s-834418212237344818", name: "video_production"},
    {id: "s-834418427384299580", name: "teaching"},
    {id: "s-834419497183871016", name: "audio_post_production"},
    {id: "s-834419616415088670", name: "video_post_production"},
    {id: "s-834420004031823892", name: "photography"},
    {id: "s-835420490998611988", name: "user_experience"},
]

var people_skills = [
    {person: "p-208321561982271489", skill: "s-831556065052852224"},
    {person: "p-185307556032413697", skill: "s-831561372491841577"},
    {person: "p-715073251696705618", skill: "s-831561372491841577"},
    {person: "p-262323994936475649", skill: "s-833449267758104596"},
    {person: "p-523401372188540939", skill: "s-831565297998757998"},
    {person: "p-703688028639461386", skill: "s-831556826981597186"},
    {person: "p-703688028639461386", skill: "s-831557017674973214"},
    {person: "p-707877605025644586", skill: "s-834418427384299580"},
    {person: "p-433629219898130435", skill: "s-831565192282112046"},
    {person: "p-679156502220636200", skill: "s-831557520556032031"},
    {person: "p-775464119037067285", skill: "s-834418427384299580"},
    {person: "p-433629219898130435", skill: "s-833449267758104596"},
    {person: "p-523401372188540939", skill: "s-835420490998611988"},
    {person: "p-208321561982271489", skill: "s-833449137575821312"},
    {person: "p-715073251696705618", skill: "s-831556710702907433"},
    {person: "p-505789102222737420", skill: "s-831557520556032031"},
    {person: "p-505789102222737420", skill: "s-831561435104542760"},
    {person: "p-715073251696705618", skill: "s-831557121643905025"},
    {person: "p-703688028639461386", skill: "s-834418427384299580"},
    {person: "p-262323994936475649", skill: "s-831565297998757998"},
    {person: "p-303278071174266883", skill: "s-833449137575821312"},
    {person: "p-185307556032413697", skill: "s-831557520556032031"},
    {person: "p-523401372188540939", skill: "s-831557520556032031"},
    {person: "p-185307556032413697", skill: "s-831561435104542760"},
    {person: "p-287768540847800320", skill: "s-831556710702907433"},
    {person: "p-703688028639461386", skill: "s-831556687391359016"},
    {person: "p-703688028639461386", skill: "s-831556866122448916"},
    {person: "p-129702656418643968", skill: "s-831565192282112046"},
    {person: "p-433629219898130435", skill: "s-831565297998757998"},
    {person: "p-703688028639461386", skill: "s-831557254347096136"},
    {person: "p-707877605025644586", skill: "s-834420004031823892"},
    {person: "p-287768540847800320", skill: "s-831557520556032031"},
    {person: "p-433629219898130435", skill: "s-833448906196254811"},
    {person: "p-703688028639461386", skill: "s-831557469809541142"},
    {person: "p-795881317619335209", skill: "s-831565192282112046"},
    {person: "p-208321561982271489", skill: "s-833449267758104596"},
    {person: "p-185307556032413697", skill: "s-831556065052852224"},
    {person: "p-715073251696705618", skill: "s-831556065052852224"},
    {person: "p-679156502220636200", skill: "s-833449137575821312"},
    {person: "p-222844791744888832", skill: "s-831561372491841577"},
    {person: "p-505789102222737420", skill: "s-831561301938667520"},
    {person: "p-715073251696705618", skill: "s-831556922632699955"},
    {person: "p-303278071174266883", skill: "s-831565192282112046"},
    {person: "p-433629219898130435", skill: "s-831556710702907433"},
    {person: "p-433629219898130435", skill: "s-831556922632699955"},
    {person: "p-208321561982271489", skill: "s-831556866122448916"},
    {person: "p-185307556032413697", skill: "s-831561301938667520"},
    {person: "p-433629219898130435", skill: "s-831557145907560458"},
    {person: "p-208321561982271489", skill: "s-831557121643905025"},
    {person: "p-287768540847800320", skill: "s-831556826981597186"},
    {person: "p-523401372188540939", skill: "s-831565192282112046"},
    {person: "p-703688028639461386", skill: "s-831556710702907433"},
    {person: "p-715073251696705618", skill: "s-831561435104542760"},
    {person: "p-286245796289052673", skill: "s-831561301938667520"},
    {person: "p-303278071174266883", skill: "s-834420004031823892"},
    {person: "p-433629219898130435", skill: "s-831557520556032031"},
    {person: "p-523401372188540939", skill: "s-833449137575821312"},
    {person: "p-129702656418643968", skill: "s-831565297998757998"},
    {person: "p-703688028639461386", skill: "s-831557121643905025"},
    {person: "p-208321561982271489", skill: "s-831561372491841577"},
    {person: "p-707877605025644586", skill: "s-834419497183871016"},
    {person: "p-185307556032413697", skill: "s-834418427384299580"},
    {person: "p-703688028639461386", skill: "s-831557300409860106"},
    {person: "p-208321561982271489", skill: "s-831565297998757998"},
    {person: "p-703688028639461386", skill: "s-831557520556032031"},
    {person: "p-435541241795444737", skill: "s-831557520556032031"},
    {person: "p-435541241795444737", skill: "s-831561435104542760"},
    {person: "p-505789102222737420", skill: "s-831557254347096136"},
    {person: "p-679156502220636200", skill: "s-833448406742597722"},
    {person: "p-222844791744888832", skill: "s-831557520556032031"},
    {person: "p-679156502220636200", skill: "s-833449267758104596"},
    {person: "p-303278071174266883", skill: "s-831565297998757998"},
    {person: "p-262323994936475649", skill: "s-831565192282112046"},
    {person: "p-433629219898130435", skill: "s-831556826981597186"},
    {person: "p-287768540847800320", skill: "s-831556687391359016"},
    {person: "p-703688028639461386", skill: "s-831556065052852224"},
    {person: "p-435541241795444737", skill: "s-831556065052852224"},
    {person: "p-715073251696705618", skill: "s-831561301938667520"},
    {person: "p-262323994936475649", skill: "s-833449137575821312"},
    {person: "p-707877605025644586", skill: "s-832734043270283275"},
    {person: "p-262323994936475649", skill: "s-834418427384299580"},
    {person: "p-409930721059405835", skill: "s-833448906196254811"},
    {person: "p-303278071174266883", skill: "s-835420490998611988"},
    {person: "p-222844791744888832", skill: "s-831556065052852224"},
    {person: "p-703688028639461386", skill: "s-831556922632699955"},
    {person: "p-208321561982271489", skill: "s-831557520556032031"},
    {person: "p-707877605025644586", skill: "s-834418212237344818"},
    {person: "p-222844791744888832", skill: "s-831556826981597186"},
    {person: "p-287768540847800320", skill: "s-831557254347096136"},
    {person: "p-703688028639461386", skill: "s-831557145907560458"},
    {person: "p-208321561982271489", skill: "s-831561435104542760"},
    {person: "p-775464119037067285", skill: "s-833448906196254811"},
    {person: "p-707877605025644586", skill: "s-834419616415088670"},
    {person: "p-703688028639461386", skill: "s-831557343954206791"},
    {person: "p-435541241795444737", skill: "s-831561301938667520"},
    {person: "p-433629219898130435", skill: "s-833449137575821312"},
    {person: "p-679156502220636200", skill: "s-831565297998757998"},
    {person: "p-715073251696705618", skill: "s-831556687391359016"},
    {person: "p-679156502220636200", skill: "s-833448906196254811"},
    {person: "p-222844791744888832", skill: "s-831561301938667520"},
    {person: "p-715073251696705618", skill: "s-831556866122448916"},
    {person: "p-433629219898130435", skill: "s-831556687391359016"},
]

