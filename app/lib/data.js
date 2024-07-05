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
