const nouns = ['enterprise', 'business culture', 'idiom', 'context', 'team', 'journey', 'mindspace', 'strategy', 'scrum', 'warroom', 'headquarters', 'objective', 'opportunity', 'vernacular', 'center of excellence', 'c-suite', 'leadership', 'resource', 'people', 'customer', 'competitor', 'collaborator', 'tactic', 'spirit guide', 'colleague', 'process', 'capability', 'model', 'consideration set', 'best alternative to a negotiated solution', 'engagement', 'settlement', 'black belt', 'six sigma', 'lean', 'toyota way', 'theory of constraints', 'theory of unreasonable demands', 'profit', 'way of working', 'principle', 'market force', 'discovery', 'system', 'structure', 'integration', 'integrity', 'factory', 'facility', 'institution', 'product', 'data', 'data set', 'database'];

const pluralNouns = ['enterprises', 'business cultures', 'idioms', 'contexts', 'teams', 'journeys', 'mindspaces', 'scrums', 'warrooms', 'objectives', 'opportunities', 'vernaculars', 'centers of excellence', 'c-suites', 'resources', 'customers', 'competitors', 'collaborators', 'tactics', 'spirit guides', 'colleagues', 'processes', 'capabilities', 'models', 'consideration sets', 'best alternatives to a negotiated solution', 'engagements', 'settlements', 'principles', 'ways of working', 'market forces', 'discoveries', 'systems', 'structures', 'integrations', 'factories', 'facilities', 'institutions', 'products', 'data', 'data sets', 'databases'];

const adjectives = ['rapid', 'efficient', 'profitable', 'customer-focused', 'emergent', 'statistically significant', 'significant', 'loss-making', 'verifiable', 'principled', 'closed', 'close', 'open', 'strategic', 'lean', 'voluminous', 'team-focused', 'expansive', 'focused', 'market-focused', 'external', 'internal', 'insufficient', 'excessive', 'negotiable', 'shifting', 'winning', 'losing', 'litigious', 'legitimate', 'illegitimate', 'idiomatic', 'large', 'small', 'common', 'rare', 'magnified', 'mixed', 'singular', 'monolithic', 'pluarlistic', 'quick', 'high speed', 'low drag', 'mindful', 'optimal', 'integrated', 'integral', 'high', 'low'];

const adverbs = ['rapidly', 'efficiently', 'profitably', 'significantly', 'verifiably', 'openly', 'closely', 'strategically', 'voluminously', 'mindfully', 'fully', 'externally', 'internally', 'insufficiently', 'negotiably', 'winningly', 'litigiously', 'legitimately', 'illegitimately', 'idiomatically', 'largely', 'bigly', 'commonly', 'rarely', 'singularly', 'monolithicly', 'pluralistically', 'quickly,', 'mindfully', 'totally', 'integrally']

const verbs = ['deploy', 'manipulate', 'maximize', 'minimize', 'monetize', 'enhance', 'accelerate', 'decelerate', 'expand', 'contract', 'extract', 'exploit', 'retire', 'research', 'develop', 'negotiate', 'repudiate', 'insinuate', 'evolve', 'devolve', 'manage', 'strategize', 'buzzwordize', 'commonize', 'optimize', 'orient', 'orientate', 'orientize', 'structurize', 'embiggen', 'totalize', 'novate', 'matriculate', 'integrate', 'datamine'];

const pastVerbs = ['deployed', 'manipulated', 'maximized', 'minimized', 'monetized', 'enhanced', 'accelerated', 'decelerated', 'expanded', 'contracted', 'extracted', 'exploited', 'retired', 'researched', 'developed', 'negotiated', 'repudiated', 'insinuated', 'evolved', 'devolved', 'managed', 'strategized', 'buzzwordized', 'commonized', 'optimized', 'oriented', 'orientated', 'orientized', 'structurized', 'embiggened', 'totalized', 'novated', 'matriculated', 'integrated', 'datamined'];

const presentVerbs = ['deploying', 'manipulating', 'maximizing', 'minimizing', 'monetizing', 'enhancing', 'accelerating', 'decelerating', 'expanding', 'contracting', 'extracting', 'exploiting', 'retiring', 'researching', 'developing', 'negotiating', 'repudiating', 'insinuating', 'evolving', 'devolving', 'managing', 'strategizing', 'buzzwordizing', 'commonizing', 'optimizing', 'orienting', 'orientating', 'orientizing', 'structurizing', 'embiggening', 'totalizing', 'novating', 'matriculating', 'integrating', 'datamining'];

const businessFunctions = ['marketing', 'logistics', 'procurement', 'engineering', 'operations', 'research and development', 'information systems', 'human resources', 'finance', 'accounting', 'public relations', 'transportation', 'manufacturing', 'project management'];

const nounSelector = (word) => {
    return nouns[Math.floor(Math.random()*nouns.length)];
}

const pluralNounSelector = (word) => {
    return pluralNouns[Math.floor(Math.random()*pluralNouns.length)];
}

const adjectiveSelector = (word) => {
    return adjectives[Math.floor(Math.random()*adjectives.length)];
}

const adverbSelector = (word) => {
    return adverbs[Math.floor(Math.random()*adverbs.length)];
}

const verbSelector = (word) => {
    return verbs[Math.floor(Math.random()*verbs.length)];
}

const pastVerbSelector = (word) => {
    return pastVerbs[Math.floor(Math.random()*pastVerbs.length)];
}

const presentVerbSelector = (word) => {
    return presentVerbs[Math.floor(Math.random()*presentVerbs.length)];
}

const businessFunctionSelector = (word) => {
    return businessFunctions[Math.floor(Math.random()*businessFunctions.length)];
}

const sentenceStructures = [`The ${businessFunctionSelector()} department has struggled with ${adjectiveSelector()} ${pluralNounSelector()}.  As a result they will ${verbSelector()} their ${pluralNounSelector()}.`, `Sometimes when facing ${pluralNounSelector()} you will need to either ${verbSelector()} your ${pluralNounSelector()} or ${adverbSelector()} ${verbSelector()} your ${nounSelector()}.`, `If your ${pluralNounSelector()} are ${adverbSelector()} ${pastVerbSelector()}, it might be time to consider ${presentVerbSelector()} your ${pluralNounSelector()}.`];

const sentenceStructureSelector = (sentence) => {
    return sentenceStructures[Math.floor(Math.random()*sentenceStructures.length)];
}

console.log(sentenceStructureSelector());

