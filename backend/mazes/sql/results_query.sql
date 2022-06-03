select solver, count(1), length,
round(avg(gentime)::numeric,5) as avgGenTime, round(min(gentime)::numeric,5), round((percentile_cont(0.5) within group(order by gentime))::numeric,5) as median, round(max(gentime)::numeric,5),
round(avg(analysistime)::numeric,5) as avganalysistime, round(min(analysistime)::numeric,5), round((percentile_cont(0.5) within group(order by analysistime))::numeric,5) as median, round(max(analysistime)::numeric,5),
round(avg(longestpath)::numeric,5) as avglongestpath, min(longestpath), percentile_cont(0.5) within group(order by longestpath) as median, max(longestpath),
round(avg(crossroadcells)::numeric,5) as avgcrossroadcells, min(crossroadcells), percentile_cont(0.5) within group(order by crossroadcells) as median, max(crossroadcells),
round(avg(junctioncells)::numeric,5) as avgjunctioncells, min(junctioncells), percentile_cont(0.5) within group(order by junctioncells) as median, max(junctioncells),
round(avg(decisioncells)::numeric,5) as avgdecisioncells, min(decisioncells), percentile_cont(0.5) within group(order by decisioncells) as median, max(decisioncells),
round(avg(straightcells)::numeric,5) as avgstraightcells, min(straightcells), percentile_cont(0.5) within group(order by straightcells) as median, max(straightcells),
round(avg(deadendcells)::numeric,5) as avgdeadendcells, min(deadendcells), percentile_cont(0.5) within group(order by deadendcells) as median, max(deadendcells),
round(avg(turncells)::numeric,5) as avgturncells, min(turncells), percentile_cont(0.5) within group(order by turncells) as median, max(turncells)
from maze_tests
group by solver, length
order by solver, length
