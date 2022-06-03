select solver, count(1),
round(avg(gentime::numeric),5) as avggentime,
round(avg(100*crossroadcells::decimal/(length*length))::numeric,5) as avgcrossroadcells,
round(avg(100*junctioncells::decimal/(length*length))::numeric,5) as avgjunctioncells,
round(avg(100*decisioncells::decimal/(length*length))::numeric,5) as avgdecisioncells,
round(avg(100*straightcells::decimal/(length*length))::numeric,5) as avgstraightcells,
round(avg(100*deadendcells::decimal/(length*length))::numeric,5) as avgdeadendcells,
round(avg(100*turncells::decimal/(length*length))::numeric,5) as avgturncells,
round(avg(100*longestpath::decimal/(length*length))::numeric,5) as avglongestpath,
round(avg(analysistime::numeric),5) as avganalysistime
from maze_tests
where length = 50
group by solver
order by avggentime desc, solver
