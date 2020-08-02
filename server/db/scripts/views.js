datacaptureExtended = `create view datacaptureExtended as select dc.id, (
	select string_agg(des.id || des.name, ', ') from "DataCaptures" dcs
	left join "DatatCaptureDesignations" dcd on dcd."DataCaptureId" = dcs.id
	left join "Designations" as des on dcd."DesignationId" = des.id
	where dcs.id=dc.id
	  group by dcs.id
) designations,(
	select string_agg(ms.id || ms.name, ', ') from "DataCaptures" dcs
	left join "DataCaptureMemberships" dcm on dcm."DataCaptureId" = dcs.id
	left join "MembershipStatuses" ms on dcm."MembershipStatusId" = ms.id
	where dcs.id=dc.id
	group by dcs.id
) memberships,
firstname, lastname, phone, email, leader, gender,
 	lg.id as lgaId, lg.name as lgaName, wd.id as wardId, wd.name as wardName,
	pu.id as puId, pu.name as puName,
	religion, occupation
	 from "DataCaptures" dc
 join "Lgas" as lg on dc."lgaId"=lg.id
 join "Wards" as wd on dc."wardId"=wd.id
 join "Pus" as pu on dc."puId"=pu.id
order by dc.id desc`
