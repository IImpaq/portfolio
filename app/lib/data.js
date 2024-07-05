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
        console.error('Error fetching timeline data:', error);
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
        console.error('Error fetching timeline data:', error);
        return null;
    } else if (data) {
        return data;
    }
};
