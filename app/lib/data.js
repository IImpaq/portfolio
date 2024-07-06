export const fetchTimelineData = async (supabase) => {
    const { data, error } = await supabase
        .from('timeline')
        .select('*')
        .order('id', {ascending: false});

    if (error) {
        console.error('Error fetching timeline data:', error);
        return null;
    } else if (data) {
        return data;
    }
};

export const fetchSkillsData = async (supabase) => {
    const { data, error } = await supabase
        .from('skills')
        .select('*');

    if (error) {
        console.error('Error fetching skill data:', error);
        return null;
    } else if (data) {
        return data;
    }
};

export const fetchExpertiseData = async (supabase) => {
    const { data, error } = await supabase
        .from('expertises')
        .select('*')
        .order('id', {ascending: true});

    if (error) {
        console.error('Error fetching expertise data:', error);
        return null;
    } else if (data) {
        return data;
    }
};

export const fetchProjectsData = async (supabase, limit = -1) => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('start_year', {ascending: true})
        .limit(limit === -1 ? null : limit);

    if (error) {
        console.error('Error fetching projects data:', error)
        return null;
    } else if (data) {
        return data;
    }
};

export const fetchProjectData = async (supabase, slug) => {
    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error) {
        console.error('Error fetching project data:', error)
        return null;
    } else if (data) {
        return data;
    }
};

export const fetchShowcaseData = async (supabase, projectId) => {
    const { data, error } = await supabase
        .from('project_showcase')
        .select('*')
        .eq('project_id', projectId)

    if (error) {
        console.error('Error fetching project showcase data:', error)
        return null;
    } else if (data) {
        return data;
    }
};

export const fetchPublicContentURL = async (supabase, filename) => {
    return supabase.storage.from("content").getPublicUrl(filename).data.publicUrl;
}
